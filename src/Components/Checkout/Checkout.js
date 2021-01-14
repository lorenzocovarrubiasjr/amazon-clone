import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../Data-Access/StateProvider";

import Subtotal from "../Subtotal/subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/sns/email/SnS-Creative-Desktop._CB1579804990_.png"
          alt="ad for checkout"
        />
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>
          <p>No Items Selected. Select All Items.</p>
          <p>Price</p>
          <hr></hr>
          <p>No Items in Cart.</p>
        </div>
      </div>
      <Subtotal></Subtotal>
      <div className="related-items"></div>
    </div>
  );
}

export default Checkout;
