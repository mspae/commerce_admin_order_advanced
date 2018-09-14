import get from "lodash.get";

export const getValueArray = prop => get(prop, "[0].value");
