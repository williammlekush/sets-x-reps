import { useState } from "react";
import { NumberField } from "../shared/numberField";

export const WeightsCalculator = () => {
  const [oneRepMax, setOneRepMax] = useState("");

  return (
    <form>
      <NumberField
        id="in-orm"
        value={oneRepMax}
        setValue={setOneRepMax}
        label="One Rep Max"
      />
    </form>
  );
};
