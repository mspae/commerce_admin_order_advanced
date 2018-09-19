import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, isDev, useAxe } from "./utils";
import App from "./components/App";

// Demo content for dev
const { order, orderItems, billingProfile } = window.drupalSettings;

// Accessibility testing
if (isDev && useAxe) {
  const axe = require("react-axe");
  axe(React, ReactDOM);
}

ReactDOM.render(
  <Provider store={store}>
    <App
      order={order}
      orderItems={orderItems}
      billingProfile={billingProfile}
    />
  </Provider>,
  document.getElementById("commerce-admin-order-advanced-mount")
);
