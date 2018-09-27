import { EditableAddressInstantiator } from "./editableAddressInstantiator";

Array.from(document.querySelectorAll("[data-editable]")).map(
  el => new EditableAddressInstantiator(el)
);
