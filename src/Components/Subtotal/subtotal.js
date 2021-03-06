import React from "react";
import "./subtotal.css";
import { useStateValue } from "../../Data-Access/StateProvider";
import { getBasketTotal } from "../../Data-Access/reducer";

import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  let basketTotal;

  if (basket.length > 0) {
    basketTotal = basket
      .map((item) => item.price)
      .reduce((total, price) => total + price);
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
