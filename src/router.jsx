import { HashRouter, Route, Routes } from "react-router-dom";
import { WeightsCalculator } from "./components/weightsCalculator";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WeightsCalculator />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
