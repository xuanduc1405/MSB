import React, { useState } from "react";
import "./AccountStyle.scss";
import { Menu } from "antd";
import { listFunctionManage } from "../../_core/constant/constant";
import { decodeToken } from "../../_core/helpers/Utils";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const user = localStorage.getItem("USER");
  const navigate = useNavigate();
  const token = user ? decodeToken(user) : "";
  const [contentShow, setContentShow] = useState("");
  const contentList = [
    {
      key: "user",
      title: "Thông tin chung",
      content: "hihi",
    },
    {
      key: "product",
      title: "Thông tin sản phẩm",
      content: "hihi",
    }
  ];
  const handleClickMenu = (e) => {
    if (e?.key === "logout") {
      localStorage.removeItem("USER");
      navigate("/");
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
