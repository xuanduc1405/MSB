import React, { useEffect, useState } from "react";
import "./ProductStyle.scss";
import { getListProducts } from "../../../../service/product/ProductService";
import Product from "./Product";
import { ReactComponent as GoArrow } from "./../../../../_core/img/GoArrow.svg";

const ListProduct = () => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getListProduct();
  }, []);

  const getListProduct = async () => {
    try {
      const dataList = await getListProducts();
      if (!dataList?.data) return;
      setListProduct(dataList?.data);
    } catch (e) {}
  };

  const discoveryNow = (
    <div className="footer-button">
      <span>Khám phá ngay</span>
      <GoArrow />
    </div>
  );
  return (
    <div className="list-product-content-container">
      <div className="title-product-list">Danh sách sản phẩm</div>
      <div className="product-list-container">
        {listProduct?.map((item) => {
          return (
            <Product
              image={item.image}
              title={item?.title}
              content={item?.detail}
              footer={discoveryNow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
