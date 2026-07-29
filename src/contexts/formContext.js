import { createContext } from "react";

const ProtocolContext = createContext({
  KEY: {},
  state: [],
  isValid: false,
  loadProtocol: () => {},
});

export default ProtocolContext;
