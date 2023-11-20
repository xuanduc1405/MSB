import { Carousel } from "antd";
import React from "react";
import { listSlideShow } from "../_core/constant/constant";
import ContentPage from "./../component/content/ContentPage";
const HomePage = ({refLogin}) => {
  return (
    <div className="content">
      <Carousel autoplay>{listSlideShow.map((item) => item.value)}</Carousel>
      <ContentPage refLogin={refLogin}/>
    </div>
  );
};

export default HomePage;
