import React from "react";
import "react-app-polyfill/ie9";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
// import { store } from "./app/store";
import { store } from "./core/store";

import { Provider } from "react-redux";

let domain = "dev-pkl4wcxhgtnz6ug6.us.auth0.com";
let clientId = "peUEx2VUs5FEtQiFehkfiUwOT3Ifjd8u";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        audience="https://dev-pkl4wcxhgtnz6ug6.us.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
