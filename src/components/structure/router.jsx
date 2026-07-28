import { HashRouter, Route, Routes } from "react-router-dom";
import { ProtocolInForm } from "../content/ProtocolInForm";
import { ProtocolOutForm } from "../content/ProtocolOutForm";
import { Layout } from "./Layout";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProtocolInForm />} />
          <Route path="protocol-results" element={<ProtocolOutForm />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
