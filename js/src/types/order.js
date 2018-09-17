import PropTypes from "prop-types";
import { valueArray, entityReference, price } from ".";

export const order = PropTypes.shape({
  adjustments: valueArray(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
  billingProfile: PropTypes.arrayOf(entityReference),
  cart: valueArray(PropTypes.bool),
  changed: valueArray(PropTypes.string, PropTypes.string),
  checkout_flow: PropTypes.arrayOf(entityReference),
  checkout_step: valueArray(PropTypes.string),
  completed: valueArray(PropTypes.bool),
  coupons: valueArray(PropTypes.bool),
  created: valueArray(PropTypes.string, PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
  ip_address: valueArray(PropTypes.string),
  locked: valueArray(PropTypes.bool),
  mail: valueArray(PropTypes.string),
  order_id: valueArray(PropTypes.number),
  order_items: PropTypes.arrayOf(entityReference),
  order_number: valueArray(PropTypes.string),
  payment_gateway: valueArray(entityReference),
  payment_method: PropTypes.arrayOf(entityReference),
  placed: valueArray(PropTypes.string, PropTypes.string),
  shipments: PropTypes.arrayOf(entityReference),
  state: valueArray(PropTypes.string),
  store_id: PropTypes.arrayOf(entityReference),
  total_price: PropTypes.arrayOf(price),
  type: PropTypes.arrayOf(entityReference),
  uid: PropTypes.arrayOf(entityReference),
  uuid: valueArray(PropTypes.string)
});
