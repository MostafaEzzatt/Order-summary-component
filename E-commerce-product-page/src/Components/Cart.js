import { useState } from "react";
import CartStyled from "./styled/cart.styled";
import { PrimaryBtn } from "./styled/Btn.styled";

import productImg from "../images/image-product-1-thumbnail.jpg";
import TrashIcon from "../images/icon-delete.svg";

const cartItems = [
  {
    id: 1,
    img: productImg,
    title: "Fall Limited Edition Sneakers",
    price: 125,
    count: 5,
  },
  {
    id: 2,
    img: productImg,
    title: "Fall Limited Edition Sneakers",
    price: 125,
    count: 3,
  },
  {
    id: 3,
    img: productImg,
    title: "Fall Limited Edition Sneakers",
    price: 125,
    count: 1,
  },
];

function Cart() {
  const [items, setItems] = useState(cartItems);

  function handleDelete(id) {
    const newItems = items.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });
    setItems(newItems);
  }
  return (
    <CartStyled>
      <h4>Cart</h4>
      <div className="flex f-jc-c f-ai-c">
        {items.length <= 0 ? <p>Your cart is empty</p> : ""}
        {items.map((item) => {
          {
            return (
              <div key={item.id}>
                <div>
                  <img src={item.img} alt={item.title} />
                </div>
                <div>
                  <h5>{item.title}</h5>
                  <p>
                    ${item.price.toFixed(2)} x {item.count}{" "}
                    <span>${(item.price * item.count).toFixed(2)}</span>
                  </p>
                </div>

                <div>
                  <button onClick={() => handleDelete(item.id)}>
                    <TrashIcon />
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>

      {items.length > 0 && <FullBtn />}
    </CartStyled>
  );
}

const FullBtn = () => {
  return (
    <div>
      <PrimaryBtn>Checkout</PrimaryBtn>
    </div>
  );
};

export default Cart;
