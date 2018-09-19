import get from "lodash.get";

export const getTitle = (entity, def) => get(entity, "attributes.title", def);

export const getQuantity = (entity, def) =>
  get(entity, "attributes.quantity", def);

export const getUrl = (entity, def) => get(entity, "attributes.url", def);

// @todo replace with proper localisation
export const getUnitPrice = (entity, def) => {
  const { number, currency_code } = get(entity, "attributes.unit_price", def);
  return `${number} ${currency_code}`;
};
