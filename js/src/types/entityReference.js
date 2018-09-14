import PropTypes from "prop-types";

export const entityReference = PropTypes.shape({
  target_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  target_revision_id: PropTypes.number,
  target_type: PropTypes.string,
  target_uuid: PropTypes.string,
  url: PropTypes.string
});
