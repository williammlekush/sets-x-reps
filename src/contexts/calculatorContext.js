import { createContext } from "react";

const CalculatorContext = createContext({
  state: [],
  isValid: false,
  calculate: () => {},
  setUnits: () => {},
  applyUnits: () => {},
});

export default CalculatorContext;
