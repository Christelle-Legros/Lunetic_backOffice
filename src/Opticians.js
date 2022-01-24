import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const OpticianList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id_optician" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="company" />
      <TextField source="address" />
      <TextField source="other_address" />
      <TextField source="postal_code" />
      <TextField source="city" />
      <EmailField source="email" />
      <TextField source="mobile_phone" />
      <TextField source="password" />
      <UrlField source="website" />
      <TextField source="home_phone" />
      <TextField source="finess_code" />
      <TextField source="siret" />
      <TextField source="vat_number" />
      <UrlField source="link_picture" />
    </Datagrid>
  </List>
);

export const OpticianEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id_optician" disabled />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="company" />
      <TextField source="address" />
      <TextField source="other_address" />
      <TextField source="postal_code" />
      <TextField source="city" />
      <EmailField source="email" />
      <TextField source="mobile_phone" />
      <TextField source="password" />
      <UrlField source="website" />
      <TextField source="home_phone" />
      <TextField source="finess_code" />
      <TextField source="siret" />
      <TextField source="vat_number" />
      <UrlField source="link_picture" />
    </SimpleForm>
  </Edit>
);

export const OpticianCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="company" />
      <TextField source="address" />
      <TextField source="other_address" />
      <TextField source="postal_code" />
      <TextField source="city" />
      <EmailField source="email" />
      <TextField source="mobile_phone" />
      <TextField source="password" />
      <UrlField source="website" />
      <TextField source="home_phone" />
      <TextField source="finess_code" />
      <TextField source="siret" />
      <TextField source="vat_number" />
      <UrlField source="link_picture" />
    </SimpleForm>
  </Create>
);
