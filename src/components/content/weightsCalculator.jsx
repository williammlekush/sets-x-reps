import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import FormContext from "../../contexts/formContext";
import { NumberField } from "../shared/numberField";

const WEIGHTS_IN_FORM_KEY = {
  ORM: "in-orm",
  RI: "in-ri",
  REPS: "in-reps",
};

export const WeightsCalculator = () => {
  const [form, setForm] = useState({
    [WEIGHTS_IN_FORM_KEY.ORM]: "",
    [WEIGHTS_IN_FORM_KEY.RI]: "",
    [WEIGHTS_IN_FORM_KEY.REPS]: "",
  });

  const onSubmitWeightsForm = (e) => {
    e.preventDefault();
  };

  return (
    <FormContext.Provider value={[form, setForm]}>
      <form onSubmit={onSubmitWeightsForm}>
        <Flex direction="column" alignItems="center" gapY={4}>
          <NumberField
            id={WEIGHTS_IN_FORM_KEY.ORM}
            label="One Rep Max"
            root={{
              min: 0,
              max: 999,
              formatOptions: { maximumFractionDigits: 0 },
            }}
            input={{
              placeholder: "###",
              maxWidth: "3.2ch",
            }}
          />
          <NumberField
            id={WEIGHTS_IN_FORM_KEY.RI}
            label="Relative Intensity"
            root={{
              min: 0,
              max: 1,
              formatOptions: { style: "percent" },
            }}
            input={{
              placeholder: "0%",
              maxWidth: "4.5ch",
            }}
          />
          <NumberField
            id={WEIGHTS_IN_FORM_KEY.REPS}
            label="Reps per Set"
            root={{
              min: 0,
              max: 50,
              formatOptions: { maximumFractionDigits: 0 },
            }}
            input={{
              placeholder: "##",
              maxWidth: "2.2ch",
            }}
          />
        </Flex>
      </form>
    </FormContext.Provider>
  );
};
