import React, { useState } from "react";
import './ContentStyle.scss';
import HeaderIntroduce from "./component/HeaderIntroduce/HeaderIntroduce";
import ListProduct from "./component/ListProduct/ListProduct";
import PopupLogin from "../login/PopupLogin";
const ContentPage = ({refLogin}) => {
    return (
        <div className="content-container">
           <HeaderIntroduce />
           <ListProduct />
           <PopupLogin refLogin={refLogin}/>
        </div>
    )
};

export default ContentPage;
