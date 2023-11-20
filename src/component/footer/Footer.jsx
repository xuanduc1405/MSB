import React from "react";
import "./FooterStyle.scss";

const FooterPage = () => {
  return (
    <div className="footer-page">
      <span className="copy-right">
        Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB
      </span>
      <div className="right-footer">
        <span className="rule">Điều khoản dịch vụ</span>
        <span className="bank">Ngân hàng điện tử</span>
      </div>
    </div>
  );
};

export default FooterPage;
