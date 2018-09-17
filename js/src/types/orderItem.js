import PropTypes from "prop-types";
import { entityReference, valueArray, price } from ".";

export const orderItem = PropTypes.shape({
  adjustments: valueArray(PropTypes.string),
  changed: valueArray(PropTypes.string, PropTypes.string),
  created: valueArray(PropTypes.string, PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.array),
  order_id: PropTypes.arrayOf(entityReference),
  order_item_id: valueArray(PropTypes.number),
  overriden_unit_price: valueArray(PropTypes.bool),
  purchased_entity: PropTypes.arrayOf(entityReference),
  quantity: valueArray(PropTypes.string),
  title: valueArray(PropTypes.string),
  total_price: PropTypes.arrayOf(price),
  type: PropTypes.arrayOf(entityReference),
  unit_price: PropTypes.arrayOf(price),
  uses_legacy_adjustments: valueArray(PropTypes.bool),
  uuid: valueArray(PropTypes.string)
});
