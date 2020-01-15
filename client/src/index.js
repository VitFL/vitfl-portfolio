import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { AlertProvider } from "@components/Alert/AlertProvider";

require("dotenv").config();

ReactDOM.render(
  <AlertProvider>
    <App />
  </AlertProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
