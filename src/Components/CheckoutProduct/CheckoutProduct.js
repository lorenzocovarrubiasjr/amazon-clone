import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../Data-Access/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <>
      <div className="checkout-product">
        <img className="checkout-product-img" src={image} alt="{title}" />
        <div className="checkout-product-info">
          <p className="checkout-product-title">{title}</p>
          <p className="checkout-product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkout-product-rating">
            {Array(rating)
              .fill()
              .map(() => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
