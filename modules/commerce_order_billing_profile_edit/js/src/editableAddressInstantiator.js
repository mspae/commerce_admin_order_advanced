import React from "react";
import ReactDOM from "react-dom";
import { EditableAddress } from "./components";

export class EditableAddressInstantiator {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    this.readDataAttributes();
    this.render();
  }

  readDataAttributes() {
    try {
      this.data = JSON.parse(this.el.dataset.editable);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(
        "Error initializing Drupal editable field, invalid data-editable property!",
        e
      );
    }
  }

  render() {
    try {
      ReactDOM.render(<EditableAddress data={this.data} />, this.el);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(
        "Error initializing Drupal editable field, error rendering!",
        e
      );
    }
  }
}
