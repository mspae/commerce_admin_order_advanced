import { EditableAddressInstantiator } from "./editableAddressInstantiator";

// @TODO Remove EditableAddressInstantiator and put that part in here. We don't
// need it.
(($, window, Drupal) => {
  Drupal.behaviors.initialise_commerce_order_billing_profile_edit = {
    attach(context) {
      const instances = [];
      $(context)
        .find("[data-editable]")
        .once("initialise-commerce-order-billing-profile-edit")
        .each(function eachCommerceOrderBillingProfileEditFn() {
          const el = $(this).get(0);

          window.Editable_Registry.addInitHook(store => {
            instances.push(new EditableAddressInstantiator(el, store));
          });
        });
    }
  };
})(jQuery, window, Drupal);
