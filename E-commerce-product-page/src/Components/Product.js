import { useState } from "react";
import Gallary from "./Gallary.js";
import CounterInput from "./CounterInput.js";

import ProductStyled from "./styled/Product.styled";
import { PrimaryBtn } from "./styled/Btn.styled.js";

import CartIcon from "../images/icon-cart.svg";

const Product = ({ productInfo }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      <ProductStyled className="product">
        <Gallary
          images={productInfo.images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        <div className="product__info">
          <h3>{productInfo.seller}</h3>

          <h1>{productInfo.title}</h1>

          <p>{productInfo.description}</p>

          <div className="flex f-jc-b f-ai-c">
            <div className="flex f-ai-c">
              {productInfo.price}
              <span className={productInfo.discount || "hide"}>
                {productInfo.discount}
              </span>
            </div>

            <div className={productInfo.oldPrice || "hide"}>
              {productInfo.oldPrice}
            </div>
          </div>

          <div className="product__cta flex">
            <CounterInput />

            <PrimaryBtn className="flex f-ai-c f-jc-c">
              <CartIcon />
              Add To Cart
            </PrimaryBtn>
          </div>
        </div>
      </ProductStyled>
    </>
  );
};

export default Product;
