import React from "react";
import { Grid, Input, Button, Image, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { getQueryFromRIO, EntityLoader } from "icu";
import { isDev } from "../utils";
import {
  getPurchasedEntity,
  getImages,
  getTitle,
  getQuantity,
  getUrl,
  getUnitPrice
} from "../normalizers";

const OrderItem = ({ bundle, type, uuid }) => (
  <EntityLoader bundle={bundle} type={type} uuid={uuid}>
    {(resources, loading, error) =>
      resources.map(entity => (
        <Grid key={entity.id} padded>
          <Grid.Column width={2}>
            <EntityLoader {...getQueryFromRIO(getPurchasedEntity(entity))}>
              {(purchasedEntities, loading, error) =>
                purchasedEntities.map(
                  purchasedEntity =>
                    getImages(purchasedEntity) && (
                      <EntityLoader
                        key={purchasedEntity.id}
                        {...getQueryFromRIO(getImages(purchasedEntity)[0])}
                      >
                        {(imageResources, loading, error) =>
                          imageResources.map(imageEntity => (
                            <Image
                              key={imageEntity.id}
                              src={getUrl(imageEntity)}
                              size="mini"
                            />
                          ))
                        }
                      </EntityLoader>
                    )
                )
              }
            </EntityLoader>
          </Grid.Column>
          <Grid.Column width={9}>
            <Header as="h4">{getTitle(entity)}</Header>
            {getUnitPrice(entity)}
          </Grid.Column>
          <Grid.Column width={3}>
            <Input fluid type="number" value={getQuantity(entity)} />
          </Grid.Column>
          <Grid.Column width={1}>
            <Button circular icon="delete" />
          </Grid.Column>
        </Grid>
      ))
    }
  </EntityLoader>
);

if (isDev) {
  const PropTypes = require("prop-types");
  OrderItem.propTypes = {
    bundle: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired
  };
}

const OrderItemContainer = connect(
  (state, ownProps) => ({}),
  dispatch => ({})
)(OrderItem);

export {
  OrderItemContainer as OrderItem,
  OrderItem as OrderItemPresentational
};
