import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";

import productThumb1 from "./images/image-product-1-thumbnail.jpg";
import productThumb2 from "./images/image-product-2-thumbnail.jpg";
import productThumb3 from "./images/image-product-3-thumbnail.jpg";
import productThumb4 from "./images/image-product-4-thumbnail.jpg";

const productInfo = {
  seller: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: "$125.00",
  oldPrice: "$250.00",
  discount: "50%",
  images: {
    full: {
      0: product1,
      1: product2,
      2: product3,
      3: product4,
    },
    thumb: {
      0: productThumb1,
      1: productThumb2,
      2: productThumb3,
      3: productThumb4,
    },
  },
};

export default productInfo;
