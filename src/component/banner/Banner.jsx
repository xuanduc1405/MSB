import React from "react";
import "./BannerStyle.scss";
import { Button } from "antd";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="introduce">
          <span>
            Trải nghiệm sống cực chất cho <br />
            dân văn phòng
          </span>{" "}
          <br />
          <p>
            Lương từ 8 triệu/tháng, nhận ngay tới <br />
            200 triệu VND
          </p>
        </div>
        <Button
          type="link"
          style={{
            border: "1px solid #F4600C",
            color: "white",
            backgroundColor: "#F4600C",
            fontWeight: "500",
            padding: "0px 40px",
            fontSize: "14px",
          }}
        >
          Khám phá ngay
        </Button>
      </div>
    </div>
  );
};

export default Banner;
