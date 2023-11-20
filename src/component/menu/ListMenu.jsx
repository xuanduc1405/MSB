import { Menu } from "antd";
import React from "react";
import { DownOutlined } from '@ant-design/icons';


const ListMenu = ({ refLogin, setLogin, data }) => {
  const handleClickMenu = (e) => {
    if (e?.key === "signIn") {
      refLogin?.current?.open().then(()=>setLogin(true));
    }
  };
  return (
    <div className="list-menu">
      <Menu
        mode="horizontal"
        items={data}
        onClick={(e) => handleClickMenu(e)}
        expandIcon={<DownOutlined />}
      />
    </div>
  );
};

export default ListMenu;
