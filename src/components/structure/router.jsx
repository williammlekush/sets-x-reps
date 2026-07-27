import { HashRouter, Route, Routes } from "react-router-dom";
import { WeightsCalculator } from "../content/weightsCalculator";
import { Layout } from "./layout";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WeightsCalculator />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
