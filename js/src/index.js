import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "@1xinternet/drupal-semantic-ui/dist/drupal-semantic-ui.css";

//import "./index.css";

import App from "./components/App";
import { createStore, isDev, useAxe } from "./utils";

// Demo content for dev
const { order, orderItems, billingProfile } = window.drupalSettings;

// Accessibility testing
if (isDev && useAxe) {
  const axe = require("react-axe");
  axe(React, ReactDOM);
}

const store = createStore();

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
