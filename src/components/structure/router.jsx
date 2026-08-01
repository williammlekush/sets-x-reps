import { HashRouter, Route, Routes } from "react-router-dom";
import { ROUTE } from "../../util/constants";
import { ProtocolInForm } from "../content/ProtocolInForm";
import { ProtocolOutForm } from "../content/ProtocolOutForm/ProtocolOutForm";
import { ProtocolProvider } from "../providers/ProtocolProvider";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTE.INDEX} element={<ProtocolProvider />}>
          <Route index element={<ProtocolInForm />} />
          <Route path={ROUTE.PROTOCOL_RESULTS} element={<ProtocolOutForm />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
