import React, { Fragment } from "react";
import { Header, Segment, Form } from "semantic-ui-react";
import { t, EntityLoader } from "icu";

const Profile = ({ uuid, type }) => (
  <Fragment>
    <Header as="h2" attached="top">
      {t("Customer Profile")}
    </Header>
    <Segment attached>
      <EntityLoader bundle="profile" type={type} uuid={uuid}>
        {(resources, loading, error) =>
          resources.map(profile => (
            <Form key={profile.id}>
              <Form.Input fluid label="Family label" value={""} />
            </Form>
          ))
        }
      </EntityLoader>
    </Segment>
  </Fragment>
);

export { Profile };
