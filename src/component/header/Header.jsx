import React, { useEffect, useMemo, useState } from "react";
import "./HeaderStyle.scss";
import ListMenu from "../menu/ListMenu";
import { Button, Drawer, Dropdown, Menu, Space, Typography } from "antd";
import { decodeToken } from "../../_core/helpers/Utils";
import { items } from "../../_core/constant/constant";
import useLocalStorageChange from "../../utilities/hooks/useLocalStorage";
import { handleCheckToken } from "../../utilities/helpers";
import { useNavigate } from "react-router";
import UserInfoForm from "../form/UserInfoForm";

const Header = ({ refLogin }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("USER");
  const token = user ? decodeToken(user) : "";
  const [isLogged, setIsLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const menu = useMemo(() => {
    const newList = items?.filter((item) =>
      isLogged ? item?.key !== "signIn" : item
    );
    return newList;
  }, [isLogged]);

  useEffect(() => {
    const user = localStorage.getItem("USER");
    handleCheckToken(user, setIsLogged);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  useLocalStorageChange({
    callback: (e) => {
      const user = e?.detail?.["USER"];
      handleCheckToken(user, setIsLogged);
    },
  });

  const accountList = [
    {
      label: <p onClick={() => navigate("/account")}>Quản lí tài khoản</p>,
      key: "manageAccount",
    },
    {
      label: (
        <p
          onClick={() => {
            localStorage.removeItem("USER");
            setIsLogged(false);
            navigate("/");
          }}
        >
          Đăng xuất
        </p>
      ),
      key: "signOut",
    },
  ];
  return (
    <div className="header-container">
      <div className="logo" onClick={() => navigate("/")}></div>
      <div className="list-action-header">
        <ListMenu refLogin={refLogin} data={menu} />
        <div className="right-header">
          <div className="button-block">
            <Button
              type="link"
              style={{
                border: "1px solid #F4600C",
                color: "#F4600C",
                fontWeight: "600",
                width: "123px",
              }}
              onClick={showDrawer}
            >
              Yêu cầu tư vấn
            </Button>
            <Drawer
              className="form-user-info"
              title={
                <Typography.Title level={5}>Yêu cầu tư vấn</Typography.Title>
              }
              onClose={onClose}
              open={open}
              styles={{
                body: {
                  paddingBottom: 80,
                },
              }}
            >
              <UserInfoForm />
            </Drawer>
          </div>
          {isLogged && (
            <Dropdown menu={{ items: accountList }}>
              <div className="account">
                <Space>
                  <img src={token?.image} className="avatar" />
                  <span>{`${token?.username} ${token?.lastName}`}</span>
                </Space>
              </div>
            </Dropdown>
          )}
          <></>
        </div>
      </div>
    </div>
  );
};
export default Header;
