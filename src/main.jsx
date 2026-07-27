import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./components/structure/router.jsx";
import { Provider } from "./components/ui/provider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Router />
    </Provider>
  </StrictMode>,
);
