import React, { useState } from "react";
import './ContentStyle.scss';
import HeaderIntroduce from "./component/HeaderIntroduce/HeaderIntroduce";
import ListProduct from "./component/ListProduct/ListProduct";
import PopupLogin from "../login/PopupLogin";
const ContentPage = () => {
    return (
        <div className="content-container">
           <HeaderIntroduce />
           <ListProduct />
        </div>
    )
};

export default ContentPage;
