import React from "react";
import { Breadcrumb } from "antd";
import './BreadCrumbStyle.scss'
const BreadCrumb = ({items}) => {
  return (
      <div className="bread-container">
        <Breadcrumb items={items} />
      </div>
  );
};

export default BreadCrumb;
