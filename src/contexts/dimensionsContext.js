import { createContext } from "react";

export const DimensionsContext = createContext({
  width: 0,
  height: 0,
});

export default DimensionsContext;
