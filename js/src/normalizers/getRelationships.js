import get from "lodash.get";

export const getImages = (entity, def) =>
  get(entity, "relationships.field_images.data", def);

export const getPurchasedEntity = (entity, def) =>
  get(entity, "relationships.purchased_entity.data", def);

export const getOrderItems = (entity, def) =>
  get(entity, "relationships.order_items.data", def);
