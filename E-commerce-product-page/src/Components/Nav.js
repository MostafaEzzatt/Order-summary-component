import { useState } from "react";
import Links from "./Links";
import { NavStyled, NavLinks, Overlay } from "./styled/Nav.styled";

import MenuIcon from "../images/icon-menu.svg";
import CartIcon from "../images/icon-cart.svg";
import CloseIcon from "../images/icon-close.svg";
import avatarImg from "../images/image-avatar.png";

function Nav({ showCart, setShowCart }) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <>
      <Overlay className={`md-hide ${navIsOpen && "open"}`} />
      <NavLinks className={`md-hide ${navIsOpen && "open"}`}>
        <button onClick={() => handleNav()} className="pointer">
          <CloseIcon />
        </button>
        <Links />
      </NavLinks>
      <NavStyled className="flex f-ai-c f-jc-b">
        <div className="flex f-ai-c f-jc-c">
          <button
            className="flex f-ai-c f-jc-c pointer md-hide"
            onClick={() => handleNav()}
          >
            <MenuIcon />
          </button>
          <h1>sneakers</h1>
        </div>

        <Links className="hide md-show" />

        <div className="flex f-ai-c f-jc-c">
          <div className="cart pointer" onClick={() => setShowCart(!showCart)}>
            <CartIcon />
            <span>1</span>
          </div>
          <img src={avatarImg} alt="user" />
        </div>
      </NavStyled>
      {/* <img src={jimg} alt="" /> */}
    </>
  );
}

export default Nav;
