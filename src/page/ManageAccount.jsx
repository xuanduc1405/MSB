import React from "react";
import BreadCrumb from "../component/breadcrumbs/BreadCrum";
import Account from "../component/account/Account";
const ManageAccount = () => {
  return (
    <div className="content">
      <div className="content-container">
        <BreadCrumb
          items={[
            {
              title: "Trang chủ",
            },
            {
              title: "Quản lí tài khoản",
            },
          ]}
        />
      <Account />
    </div>
    </div>
  );
};

export default ManageAccount;
