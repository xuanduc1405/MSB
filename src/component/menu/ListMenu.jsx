import { Menu } from "antd";
import React from "react";
// import { items } from "../../_core/constant/constant";
const ListMenu = ({ refLogin, data }) => {
  const handleClickMenu = (e) => {
    if (e?.key === "signIn") {
      refLogin?.current?.open();
    }
  };
  return (
    <div className="list-menu">
      <Menu
        mode="horizontal"
        items={data}
        onClick={(e) => handleClickMenu(e)}
      />
    </div>
  );
};
export default ListMenu;