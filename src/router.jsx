import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
