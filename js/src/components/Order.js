import React from "react";
import { Dimmer, Loader, Header, Segment } from "semantic-ui-react";
import { EntityQuery, OrderItem } from ".";
import { t } from "../utils";
import { getQueryFromRIO } from "../normalizers";
import get from "lodash.get";

const Order = ({ uuid, type }) => (
  <EntityQuery bundle="commerce_order" type={type} uuid={uuid}>
    {({ resources, loading, error }) => (
      <Dimmer.Dimmable as={Segment}>
        <Dimmer inverted active={loading}>
          <Loader size="mini" />
        </Dimmer>
        <Header as="h2">{t("Order items")}</Header>
        {(resources || []).map((resource, i) =>
          get(resource, "relationships.order_items.data", []).map((rio, j) => (
            <OrderItem key={j} {...getQueryFromRIO(rio)} />
          ))
        )}
      </Dimmer.Dimmable>
    )}
  </EntityQuery>
);

export { Order };
