import { Menu } from "antd";
import React, { useMemo } from "react";
// import { items } from "../../_core/constant/constant";
const ListMenu = ({ refLogin, data }) => {
  // const user = localStorage.getItem("USER");
  // const listItem = useMemo(() => {
  //   const newList = items?.filter(item => user ? item?.key !== 'signIn' : item);
  //   return newList;
  // }, [user]);

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
