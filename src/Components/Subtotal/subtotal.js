import React from "react";
import "./subtotal.css";
import { useStateValue } from "../../Data-Access/StateProvider";

import CurrencyFormat from "react-currency-format";

function Subtotal() {
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
              <strong>{` ${basketTotal}`}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
