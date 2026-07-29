import { createContext } from "react";

const ProtocolContext = createContext({
  state: [],
  isValid: false,
  loadProtocol: () => {},
  toggleUnits: () => {},
});

export default ProtocolContext;
