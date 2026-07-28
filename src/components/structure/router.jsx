import { HashRouter, Route, Routes } from "react-router-dom";
import { ProtocolInForm } from "../content/ProtocolInForm";
import { ProtocolOutForm } from "../content/ProtocolOutForm";
import { ProtocolProvider } from "../providers/ProtocolProvider";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProtocolProvider />}>
          <Route index element={<ProtocolInForm />} />
          <Route path="protocol-results" element={<ProtocolOutForm />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
