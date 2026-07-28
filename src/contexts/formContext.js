import { createContext } from "react";

const FormContext = createContext({
  KEY: {},
  state: [],
  isValid: false,
  loadProtocol: () => {},
});

export default FormContext;
