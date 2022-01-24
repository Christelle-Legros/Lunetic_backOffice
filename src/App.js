import React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { OpticianList, OpticianEdit, OpticianCreate } from "./Opticians";
// import dataProvider from "./dataProvider";
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  options.headers.set("Access-Control-Expose-Headers", "X-Total-Count");
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(
  "http://localhost:7000/api",
  httpClient
);

// const dataProvider = jsonServerProvider("http://localhost:7000/api");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="opticians"
        list={OpticianList}
        edit={OpticianEdit}
        create={OpticianCreate}
      />
    </Admin>
  );
}

export default App;
