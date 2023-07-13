import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style/style.css";

import App from "./App";
import IssueListService from "./service/IssueService";
import ApiProvider from "./context/APIContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const issueService = new IssueListService();
root.render(
  <ApiProvider issueService={issueService}>
    <App />
  </ApiProvider>
);
