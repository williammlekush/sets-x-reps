import { useState } from "react";
import CalculatorContext from "../../contexts/calculatorContext";
import { ORM_KEY, UNIT } from "../../util/constants";

export const OneRepMaxProvider = ({ protocol, children }) => {
  const [data, setData] = useState(
    protocol ?? {
      [ORM_KEY.REPS]: "",
      [ORM_KEY.SETS]: "",
      [ORM_KEY.ORM]: "",
      [ORM_KEY.UNITS]: UNIT.LB,
    },
  );

  const isValid = data[ORM_KEY.REPS] && data[ORM_KEY.SETS];

  const calculate = ({
    reps = parseFloat(data[ORM_KEY.REPS]),
    weight = parseFloat(data[ORM_KEY.WEIGHT]),
  } = {}) => {
    if (!reps || !weight) {
      return false;
    }

    const oneRepMax = (reps * weight) / 100; //TODO: MAKE IT REAL

    setData((prev) => ({ ...prev, [ORM_KEY.ORM]: oneRepMax }));
    return true;
  };

  const applyUnits = ({ data, value }) => {
    const unit = Object.values(UNIT).find((u) => u === value);

    if (!unit) {
      return data;
    }

    const newData = { ...data, [ORM_KEY.UNITS]: unit };
    let oneRepMax = parseFloat(data[ORM_KEY.ORM]);

    if (!oneRepMax) {
      return newData;
    }

    if (unit === UNIT.KG) {
      return {
        ...newData,
        [ORM_KEY.ORM]: oneRepMax ? JSON.stringify(oneRepMax / 2.2) : "",
      };
    }

    return {
      ...newData,
      [ORM_KEY.ORM]: oneRepMax ? JSON.stringify(oneRepMax * 2.2) : "",
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
