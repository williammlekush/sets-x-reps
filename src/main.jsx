import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./components/structure/Router.jsx";
import { Provider } from "./components/ui/provider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Router />
    </Provider>
  </StrictMode>,
);
