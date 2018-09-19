import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import { isDev } from "../utils/env";
import { getValueArray } from "../normalizers";

import { Order, Profile } from ".";

class App extends Component {
  render() {
    const {
      order: {
        uuid: orderUuid,
        type: [{ target_id: orderType }]
      },
      billingProfile: {
        uuid: profileUuid,
        type: [{ target_id: profileType }]
      }
    } = this.props;
    return (
      <Grid columns={2} padded="horizontally">
        <Grid.Column width={10}>
          <Order uuid={getValueArray(orderUuid)} type={orderType} />;
        </Grid.Column>
        <Grid.Column width={6}>
          <Profile uuid={getValueArray(profileUuid)} type={profileType} />
        </Grid.Column>
      </Grid>
    );
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
