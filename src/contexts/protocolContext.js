import { createContext } from "react";

const ProtocolContext = createContext({
  state: [],
  isValid: false,
  loadProtocol: () => {},
});

export default ProtocolContext;
