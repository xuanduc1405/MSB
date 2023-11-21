import React from "react";
import { Breadcrumb } from "antd";
import './BreadCrumbStyle.scss'
import { ReactComponent as Right } from "./../../../src/_core/img/right.svg";

const BreadCrumb = ({items}) => {
  return (
      <div className="bread-container">
        <Breadcrumb items={items} separator={<Right />} />
      </div>
  );
};

export default BreadCrumb;
