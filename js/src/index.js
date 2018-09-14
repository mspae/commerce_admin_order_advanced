import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

const { order, orderItems, billingProfile } = process.env.NODE_ENV
  ? require("./resources/exampleSettings.json")
  : window.drupalSettings || {};

ReactDOM.render(
  <App order={order} orderItems={orderItems} billingProfile={billingProfile} />,
  document.getElementById("commerce-admin-order-advanced-mount")
);
