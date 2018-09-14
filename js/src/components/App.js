import React, { Component } from "react";
import { isDev } from "../utils/env";
import { billingProfile, order, orderItems } from "../types";

import { OrderItem } from ".";

class App extends Component {
  render() {
    const {
      order: { order_items },
      orderItems
    } = this.props;
    return (
      <div>
        {order_items.map(({ target_uuid }) => (
          <OrderItem key={target_uuid} item={orderItems[target_uuid]} />
        ))}
      </div>
    );
  }
}

if (isDev()) {
  App.propTypes = {
    billingProfile: billingProfile,
    order: order,
    orderItems: orderItems
  };
}

export default App;
