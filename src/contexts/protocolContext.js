import { createContext } from "react";

const ProtocolContext = createContext({
  state: [],
  isValid: false,
  loadProtocol: () => {},
  setUnits: () => {},
  applyUnits: () => {},
});

export default ProtocolContext;
