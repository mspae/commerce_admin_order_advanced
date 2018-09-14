import PropTypes from "prop-types";
import { entityReference, address, valueArray } from ".";

export const billingProfile = PropTypes.shape({
  address: PropTypes.arrayOf(address),
  changed: valueArray(PropTypes.string, PropTypes.string),
  created: valueArray(PropTypes.string, PropTypes.string),
  isDefault: valueArray(PropTypes.bool),
  profile_id: valueArray(PropTypes.number),
  revision_id: valueArray(PropTypes.number),
  status: valueArray(PropTypes.bool),
  type: PropTypes.arrayOf(entityReference),
  uid: PropTypes.arrayOf(entityReference),
  uuid: valueArray(PropTypes.string)
});
