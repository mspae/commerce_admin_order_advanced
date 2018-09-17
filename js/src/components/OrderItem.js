import React from "react";
import {
  Dimmer,
  Loader,
  Segment,
  Grid,
  Input,
  Button
} from "semantic-ui-react";
import { connect } from "react-redux";
import get from "lodash.get";
import { isDev } from "../utils";

import { EntityQuery } from ".";

const OrderItem = ({ bundle, type, uuid }) => (
  <EntityQuery bundle={bundle} type={type} uuid={uuid}>
    {({ resources, loading, error }) => (
      <Dimmer.Dimmable as={Segment}>
        <Dimmer inverted active={loading}>
          <Loader size="mini" />
        </Dimmer>
        {(resources || []).map(resource => (
          <Grid key={resource.id}>
            <Grid.Row columns={2}>
              <Grid.Column>{get(resource, "attributes.title")}</Grid.Column>
              <Grid.Column>
                <Input
                  type="number"
                  value={get(resource, "attributes.quantity")}
                />
              </Grid.Column>
              <Grid.Column>
                <Button circular icon="delete" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ))}
      </Dimmer.Dimmable>
    )}
  </EntityQuery>
);

if (isDev) {
  const PropTypes = require("prop-types");
  OrderItem.propTypes = {
    bundle: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired
  };
}

const OrderItemContainer = connect(
  (state, ownProps) => ({}),
  dispatch => ({})
)(OrderItem);

export {
  OrderItemContainer as OrderItem,
  OrderItem as OrderItemPresentational
};
