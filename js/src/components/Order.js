import React, { Fragment } from "react";
import { Header, Segment } from "semantic-ui-react";
import { OrderItem } from ".";
import { t, EntityLoader, getQueryFromRIO } from "icu";
import { getOrderItems } from "../normalizers";

const Order = ({ uuid, type }) => (
  <Fragment>
    <Header as="h2" attached="top">
      {t("Order items")}
    </Header>
    <Segment attached>
      <EntityLoader bundle="commerce_order" type={type} uuid={uuid}>
        {(resources, loading, error) =>
          resources.map((resource, i) =>
            getOrderItems(resource, []).map((rio, j) => (
              <OrderItem key={j} {...getQueryFromRIO(rio)} />
            ))
          )
        }
      </EntityLoader>
    </Segment>
  </Fragment>
);

export { Order };
