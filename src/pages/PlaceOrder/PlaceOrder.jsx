import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" PlaceOrder="First name " />
          <input type="text" PlaceOrder="Last name" />
        </div>
        <input type="text" />
        <input type="text" />
      </div>
      <div className="place-order-right"></div>
    </form>
  );
};

export default PlaceOrder;
