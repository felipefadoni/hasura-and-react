import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user/provider";
import RoutesApp from "./layouts/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <GlobalStyles />
        <RoutesApp />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
