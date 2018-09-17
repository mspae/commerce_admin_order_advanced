import React, { Component } from "react";
import { isDev } from "../utils/env";

import { Order } from ".";
import { getValueArray } from "../normalizers";

class App extends Component {
  render() {
    const {
      order: {
        uuid,
        type: [{ target_id }]
      }
    } = this.props;
    return <Order uuid={getValueArray(uuid)} type={target_id} />;
  }
}

if (isDev) {
  const { billingProfile, order, orderItems } = require("../types");
  App.propTypes = {
    billingProfile: billingProfile,
    order: order,
    orderItems: orderItems
  };
}

export default App;
