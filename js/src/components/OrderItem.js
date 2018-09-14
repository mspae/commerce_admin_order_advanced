import React from "react";

import { orderItem } from "../types";
import { getValueArray } from "../normalizers";

const OrderItem = ({ item: { title } }) => <div>{getValueArray(title)}</div>;

OrderItem.propTypes = {
  item: orderItem
};

export { OrderItem };
