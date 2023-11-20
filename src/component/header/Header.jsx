import React, { useMemo, useState } from "react";
import "./HeaderStyle.scss";
import ListMenu from "../menu/ListMenu";
import { Button, Menu } from "antd";
import { decodeToken } from "../../_core/helpers/Utils";
import { items } from "../../_core/constant/constant";

const Header = ({ refLogin }) => {
  const user = localStorage.getItem("USER");
  const token = user ? decodeToken(user) : '';
  const [isLogined, setIsLogined] = useState(false);
  const menu = useMemo(() => {
    const newList = items?.filter(item => isLogined ? item?.key !== 'signIn' : item);
    return newList;
  }, [isLogined]);

  const accountList = [
    {
      label: (
        <div className="account">
          <img src={token?.image} className="avatar" />
          <span>{`${token?.username} ${token?.lastName}`}</span>
        </div>
      ),
      key: "product",
      children: [
        {
          label: "Quản lí tài khoản",
          key: "manageAccount",
        },
        {
          label: "Đăng xuất",
          key: "Signout",
        },
      ],
    },
  ];
  return (
    <div className="header-container">
      <div className="logo"></div>
      <div className="list-action-header">
        <ListMenu refLogin={refLogin} onLogined={() => {setIsLogined(true);}} data={menu} />
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
          </div>
          {isLogined && (
            // <div className="account">
            //   <img src={token?.image} className="avatar" />
            //   <span>{`${token?.username} ${token?.lastName}`}</span>
            // </div>
            <Menu
              mode="horizontal"
              items={accountList}
              // onClick={(e) => handleClickMenu(e)}
            />
          )}
          <></>
        </div>
      </div>
    </div>
  );
};

export default Header;
