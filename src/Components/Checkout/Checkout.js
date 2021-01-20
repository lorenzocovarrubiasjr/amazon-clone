import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../Data-Access/StateProvider";
import FlipMove from "react-flip-move";
import { getNameFromEmail } from "../../util";

import Subtotal from "../Subtotal/subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/sns/email/SnS-Creative-Desktop._CB1579804990_.png"
          alt="ad for checkout"
        />
        <div className="shopping-cart">
          <h4>Hello, {user ? getNameFromEmail(user.email) : ""}</h4>
          <h2>Your Shopping Cart</h2>
          <hr></hr>
          {basket.length === 0 ? (
            <p>No Items in Cart.</p>
          ) : (
            <FlipMove staggerDelayBy="100">
              {basket.map((item, i) => (
                <CheckoutProduct
                  key={`${item.id}_${i}`}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </FlipMove>
          )}
        </div>
      </div>
      <Subtotal></Subtotal>
      <div className="related-items"></div>
    </div>
  );
}

export default Checkout;
