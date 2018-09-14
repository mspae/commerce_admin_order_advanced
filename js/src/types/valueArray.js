import PropTypes from "prop-types";

export const valueArray = (valueType, formatType) =>
  PropTypes.arrayOf(
    PropTypes.shape({
      value: valueType,
      ...(formatType ? { format: formatType } : {})
    })
  );
