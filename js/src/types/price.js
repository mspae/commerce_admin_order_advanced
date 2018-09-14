import PropTypes from "prop-types";

export const price = PropTypes.shape({
  currency_code: PropTypes.string,
  number: PropTypes.string
});
