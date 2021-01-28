import React, { useState, useEffect } from "react";
import "./Orders.css";
import Order from "../Order/Order";

import { db } from "../../firebase";
import { useStateValue } from "../../Data-Access/StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log("Snapshot: ", snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-list">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
