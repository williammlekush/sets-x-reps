import { useState } from "react";
import { useLocation } from "react-router-dom";
import CalculatorContext from "../../contexts/calculatorContext";
import {
  INTENSITY_TO_PROTOCOL,
  PROTOCOL_KEY,
  RELATIVE_MAX_FACTORS,
  SHARED_KEY,
  UNIT,
} from "../../util/constants";

export const ProtocolProvider = ({ protocol, children }) => {
  const location = useLocation();

  const orm = location.state?.[SHARED_KEY.ORM] || {};
  const units = location.state?.[SHARED_KEY.UNITS] || {};

  const [data, setData] = useState(
    protocol ?? {
      [PROTOCOL_KEY.ORM]: orm ?? "",
      [PROTOCOL_KEY.RI]: "",
      [PROTOCOL_KEY.REPS]: "",
      [PROTOCOL_KEY.SETS]: "",
      [PROTOCOL_KEY.WEIGHT]: "",
      [PROTOCOL_KEY.UNITS]: units || UNIT.LB,
    },
  );

  const isValid =
    data[PROTOCOL_KEY.ORM] && data[PROTOCOL_KEY.RI] && data[PROTOCOL_KEY.REPS];

  const calculate = ({
    reps = parseFloat(data[PROTOCOL_KEY.REPS]),
    relativeIntensity = parseFloat(data[PROTOCOL_KEY.RI]),
  } = {}) => {
    const oneRepMax = parseFloat(data[PROTOCOL_KEY.ORM]);

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
        [PROTOCOL_KEY.SETS]: JSON.stringify(value.sets),
        [PROTOCOL_KEY.WEIGHT]: JSON.stringify(weight / 100),
      }));
      return true;
    }

    return false;
  };

  const applyUnits = ({ data, value }) => {
    const unit = Object.values(UNIT).find((u) => u === value);

    if (!unit) {
      return data;
    }

    const newData = { ...data, [PROTOCOL_KEY.UNITS]: unit };
    let oneRepMax = parseFloat(data[PROTOCOL_KEY.ORM]);
    let weight = parseFloat(data[PROTOCOL_KEY.WEIGHT]);

    if (!oneRepMax && !weight) {
      return newData;
    }

    if (unit === UNIT.KG) {
      return {
        ...newData,
        [PROTOCOL_KEY.ORM]: oneRepMax ? JSON.stringify(oneRepMax / 2.2) : "",
        [PROTOCOL_KEY.WEIGHT]: weight ? JSON.stringify(weight / 2.2) : "",
      };
    }

    return {
      ...newData,
      [PROTOCOL_KEY.ORM]: oneRepMax ? JSON.stringify(oneRepMax * 2.2) : "",
      [PROTOCOL_KEY.WEIGHT]: weight ? JSON.stringify(weight * 2.2) : "",
    };
  };

  const setUnits = (value) =>
    setData((prev) => applyUnits({ data: prev, value }));

  return (
    <CalculatorContext.Provider
      value={{
        state: [data, setData],
        isValid,
        calculate,
        setUnits,
        applyUnits,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
