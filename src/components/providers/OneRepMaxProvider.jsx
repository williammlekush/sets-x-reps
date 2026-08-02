import { useState } from "react";
import CalculatorContext from "../../contexts/calculatorContext";
import { ORM_KEY, UNIT } from "../../util/constants";

export const OneRepMaxProvider = ({ protocol, children }) => {
  const [data, setData] = useState(
    protocol ?? {
      [ORM_KEY.REPS]: "",
      [ORM_KEY.WEIGHT]: "",
      [ORM_KEY.ORM]: "",
      [ORM_KEY.UNITS]: UNIT.LB,
    },
  );

  const isValid = data[ORM_KEY.REPS] && data[ORM_KEY.WEIGHT];

  const calculate = ({
    reps = parseFloat(data[ORM_KEY.REPS]),
    weight = parseFloat(data[ORM_KEY.WEIGHT]),
  } = {}) => {
    if (!reps || !weight) {
      return false;
    }

    /**
     * title: Accuracy of Seven Equations for Predicting 1-RM Performance of Apparently Healthy, Sedentary Older Adults
     * authors: Terry M. Wood, Gianni F. Maddalozzo, and Rod A. Harter
     * organization: Department of Exercise and sport Science, Oregon State University
     * link: source: https://www.researchgate.net/publication/243666838_Accuracy_of_Seven_Equations_for_Predicting_1-RM_Performance_of_Apparently_Healthy_Sedentary_Older_Adults
     * */
    const oneRepMax = weight / (1.0278 - 0.0278 * reps);
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
    let weight = parseFloat(data[ORM_KEY.WEIGHT]);

    if (!oneRepMax && !weight) {
      return newData;
    }

    if (unit === UNIT.KG) {
      return {
        ...newData,
        [ORM_KEY.ORM]: oneRepMax ? JSON.stringify(oneRepMax / 2.2) : "",
        [ORM_KEY.WEIGHT]: weight ? JSON.stringify(oneRepMax / 2.2) : "",
      };
    }

    return {
      ...newData,
      [ORM_KEY.ORM]: oneRepMax ? JSON.stringify(oneRepMax * 2.2) : "",
      [ORM_KEY.WEIGHT]: weight ? JSON.stringify(oneRepMax * 2.2) : "",
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
