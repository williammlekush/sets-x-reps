import { HashRouter, Route, Routes } from "react-router-dom";
import { ROUTE } from "../../util/constants";
import { ProtocolInForm } from "../content/ProtocolInForm";
import { ProtocolOutForm } from "../content/ProtocolOutForm/ProtocolOutForm";
import { ProtocolsTable } from "../content/ProtocolsTable/ProtocolsTable";
import { ProtocolProvider } from "../providers/ProtocolProvider";
import { Layout } from "./layout";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          element={
            <ProtocolProvider>
              <Layout />
            </ProtocolProvider>
          }
        >
          <Route index element={<ProtocolInForm />} />
          <Route path={ROUTE.PROTOCOL_RESULTS} element={<ProtocolOutForm />} />
        </Route>
        <Route element={<Layout />}>
          <Route path={ROUTE.SAVED_PROTOCOLS} element={<ProtocolsTable />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
