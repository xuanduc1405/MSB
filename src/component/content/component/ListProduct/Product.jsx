import React from "react";
import "./ProductStyle.scss";
const Product = ({ icon, title, content, image, footer }) => {
  return (
    <div className="product-container">
      {image && <img src={image} alt={title} loading="lazy"></img>}
      <div>{icon}</div>
      <div className="content">
        <p>{title}</p>
        <span className="content-value">{content}</span>
      </div>
      {footer && footer}
    </div>
  );
};

export default Product;
