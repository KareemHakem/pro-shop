import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";

import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { router } from "./navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
