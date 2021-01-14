import React from "react";
import "./Header.css";
import { useStateValue } from "../../Data-Access/StateProvider";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          alt="amazon logo"
          src="https://i.imgur.com/hsIYjI9.png"
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <div className="header-option signIn">
          <div className="header-option-top-text">Hello World</div>
          <div className="header-option-bottom-text">Sign In</div>
        </div>
        <div className="header-option returns">
          <div className="header-option-top-text">Returns &</div>
          <div className="header-option-bottom-text">Orders</div>
        </div>
        <div className="header-option prime">
          <div className="header-option-top-text">Your</div>
          <div className="header-option-bottom-text">Prime</div>
        </div>
        <Link to="/checkout">
          <div className="header-option-cart">
            <ShoppingBasketIcon />
            <div className="cart-count">{basket?.length}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
