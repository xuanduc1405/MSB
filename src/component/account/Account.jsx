import React, { useState } from "react";
import "./AccountStyle.scss";
import { Menu } from "antd";
import { contentList, listFunctionManage } from "../../_core/constant/constant";
import { decodeToken } from "../../_core/helpers/Utils";

const Account = () => {
  const user = localStorage.getItem("USER");
  const token = user ? decodeToken(user) : "";
  const [contentShow, setContentShow] = useState(contentList[0]);

  const handleClickMenu = (e) => {
    if (e?.key === "logout") {
      localStorage.removeItem('USER');
      return;
    }
    const content = contentList.find((item) => item.key === e?.key);
    setContentShow(content);
  };
  return (
    <div className="account-container">
      <div className="left-content">
        <div className="title">{token?.lastName}</div>
        <Menu items={listFunctionManage} onClick={handleClickMenu} />
      </div>
      <div className="right-content">
        <div className="title">{contentShow?.title}</div>
      </div>
    </div>
  );
};
export default Account;
