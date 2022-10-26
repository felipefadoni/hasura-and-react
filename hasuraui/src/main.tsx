import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./layouts/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <RoutesApp />
    </BrowserRouter>
  </React.StrictMode>
);
