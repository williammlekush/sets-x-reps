import { useState } from "react";
import {
  INTENSITY_TO_PROTOCOL,
  RELATIVE_MAX_FACTORS,
} from "../..//util/constants";
import FormContext from "../../contexts/formContext";
import { Layout } from "../structure/Layout";

export const ProtocolProvider = () => {
  const PROTOCOL_KEY = {
    ORM: "orm",
    RI: "ri",
    REPS: "reps",
    SETS: "sets",
    WEIGHT: "weights",
  };

  const [data, setData] = useState({
    [PROTOCOL_KEY.ORM]: "",
    [PROTOCOL_KEY.RI]: "",
    [PROTOCOL_KEY.REPS]: "",
    [PROTOCOL_KEY.SETS]: "",
    [PROTOCOL_KEY.WEIGHT]: "",
  });

  const isValid =
    data[PROTOCOL_KEY.ORM] && data[PROTOCOL_KEY.RI] && data[PROTOCOL_KEY.REPS];

  const loadProtocol = () => {
    const oneRepMax = parseFloat(data[PROTOCOL_KEY.ORM]);
    const relativeIntensity = parseFloat(data[PROTOCOL_KEY.RI]);
    const reps = parseFloat(data[PROTOCOL_KEY.REPS]);

    if (!oneRepMax || !relativeIntensity || !reps) {
      return false;
    }

    const absoluteIntensity =
      (relativeIntensity *
        RELATIVE_MAX_FACTORS[Math.min(RELATIVE_MAX_FACTORS.length, reps) - 1]) /
      100;

    const weight = absoluteIntensity * oneRepMax;

    for (const [key, value] of Object.entries(INTENSITY_TO_PROTOCOL)) {
      if (absoluteIntensity > parseFloat(key)) {
        continue;
      }

      setData((prev) => ({
        ...prev,
        [PROTOCOL_KEY.REPS]: JSON.stringify(value.reps),
        [PROTOCOL_KEY.SETS]: JSON.stringify(value.sets),
        [PROTOCOL_KEY.WEIGHT]: JSON.stringify(weight / 100),
      }));
      return true;
    }

    return false;
  };

  return (
    <FormContext.Provider
      value={{
        KEY: PROTOCOL_KEY,
        state: [data, setData],
        isValid,
        loadProtocol,
      }}
    >
      <Layout />
    </FormContext.Provider>
  );
};
