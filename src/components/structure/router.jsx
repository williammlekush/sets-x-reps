import { HashRouter, Route, Routes } from "react-router-dom";
import { ROUTE } from "../../util/constants";
import { OneRepMaxInForm } from "../content/OneRepMaxInForm";
import { OneRepMaxOutForm } from "../content/OneRepMaxOutForm";
import { ProtocolInForm } from "../content/ProtocolInForm";
import { ProtocolOutForm } from "../content/ProtocolOutForm/ProtocolOutForm";
import { ProtocolsTable } from "../content/ProtocolsTable/ProtocolsTable";
import { OneRepMaxProvider } from "../providers/OneRepMaxProvider";
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
        <Route
          element={
            <OneRepMaxProvider>
              <Layout />
            </OneRepMaxProvider>
          }
        >
          <Route path={ROUTE.ORM} element={<OneRepMaxInForm />} />
          <Route path={ROUTE.ORM_RESULTS} element={<OneRepMaxOutForm />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
