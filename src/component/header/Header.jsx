import React, { useMemo, useState } from "react";
import "./HeaderStyle.scss";
import ListMenu from "../menu/ListMenu";
import { decodeToken } from "../../_core/helpers/Utils";
import { items } from "../../_core/constant/constant";
import { Button, Divider, Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Header = ({ refLogin }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("USER");
  const token = user ? decodeToken(user) : "";
  const [isLogined, setIsLogined] = useState(token);
  const menu = useMemo(() => {
    const newList = items?.filter((item) =>
      isLogined ? item?.key !== "signIn" : item
    );
    return newList;
  }, [isLogined]);
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
            setIsLogined(false);
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
      <div className="logo" onClick={() => navigate('/')}></div>
      <div className="list-action-header">
        <ListMenu
          refLogin={refLogin}
          setLogin={setIsLogined}
          data={menu}
        />
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
            >
              Yêu cầu tư vấn
            </Button>
            <Divider type={'vertical'} style={{marginLeft: "25px"}}/>
          </div>
          {isLogined && (
            <Dropdown menu={{ items: accountList }}>
              <div className="account">
                <Space>
                  <img src={token?.image} className="avatar" />
                  <span>{`${token?.username} ${token?.lastName}`}</span>
                </Space>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
