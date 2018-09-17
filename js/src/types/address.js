import PropTypes from "prop-types";

export const address = PropTypes.shape({
  additional_name: PropTypes.string,
  address_line1: PropTypes.string,
  address_line2: PropTypes.string,
  administrative_area: PropTypes.string,
  country_code: PropTypes.string,
  dependent_locality: PropTypes.string,
  family_name: PropTypes.string,
  given_name: PropTypes.string,
  langcode: PropTypes.string,
  locality: PropTypes.string,
  organization: PropTypes.string,
  postal_code: PropTypes.string,
  sorting_code: PropTypes.string
});
