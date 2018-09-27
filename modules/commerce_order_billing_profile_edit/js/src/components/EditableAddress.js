import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Query,
  EditableEntity,
  Provider,
  store,
  css
} from "@1xinternet/editable-core";
import { Input } from "@1xinternet/editable-base-components";

const { t } = Drupal;

export class EditableAddress extends PureComponent {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.object.isRequired
  };

  state = {
    bundle: null,
    type: null,
    uuid: null
  };

  static getDerivedStateFromProps(props) {
    const {
      data: {
        initialData: {
          data: { id: uuid, type: typeString }
        }
      }
    } = props;
    const [type, bundle] = typeString.split("--");
    return {
      uuid,
      type,
      bundle
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Query {...this.state}>
          {({ data, loading, error }) =>
            error ? (
              <div>Error loading!</div>
            ) : (
              <EditableEntity data={data}>
                {({ getData, handleChangeAndSave, saving }) =>
                  loading ? (
                    <div>Loading...</div>
                  ) : (
                    <div>
                      <div
                        className={css`
                          display: flex;
                        `}
                      >
                        <Input
                          label={t("First name")}
                          value={getData("attributes.address.given_name")}
                          onChange={handleChangeAndSave}
                          propPath="attributes.address.given_name"
                          className={css`
                            flex: 1;
                            margin-right: 1em;
                          `}
                          loading={
                            saving &&
                            saving.includes("attributes.address.given_name")
                          }
                        />
                        <Input
                          label={t("Last name")}
                          value={getData("attributes.address.family_name")}
                          onChange={handleChangeAndSave}
                          propPath="attributes.address.family_name"
                          className={css`
                            flex: 1;
                          `}
                          loading={
                            saving &&
                            saving.includes("attributes.address.family_name")
                          }
                        />
                      </div>
                      <Input
                        label={t("Company")}
                        value={getData("attributes.address.organization")}
                        onChange={handleChangeAndSave}
                        propPath="attributes.address.organization"
                        loading={
                          saving &&
                          saving.includes("attributes.address.organization")
                        }
                      />
                      <Input
                        label={t("Street address")}
                        value={getData("attributes.address.address_line1")}
                        onChange={handleChangeAndSave}
                        propPath="attributes.address.address_line1"
                        loading={
                          saving &&
                          saving.includes("attributes.address.address_line1")
                        }
                      />
                      <Input
                        value={getData("attributes.address.address_line2")}
                        onChange={handleChangeAndSave}
                        propPath="attributes.address.address_line2"
                        loading={
                          saving &&
                          saving.includes("attributes.address.address_line2")
                        }
                      />

                      <Input
                        label="Locality"
                        value={getData("attributes.address.locality")}
                        onChange={handleChangeAndSave}
                        propPath="attributes.address.locality"
                        loading={
                          saving &&
                          saving.includes("attributes.address.locality")
                        }
                      />

                      <Input
                        label="Postal code"
                        value={getData("attributes.address.postal_code")}
                        onChange={handleChangeAndSave}
                        propPath="attributes.address.postal_code"
                        loading={
                          saving &&
                          saving.includes("attributes.address.postal_code")
                        }
                      />
                    </div>
                  )
                }
              </EditableEntity>
            )
          }
        </Query>
      </Provider>
    );
  }
}
