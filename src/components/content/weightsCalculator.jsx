import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { LuBot } from "react-icons/lu";
import FormContext from "../../contexts/formContext";
import { calculateWeights } from "../../util/calculate";
import { WEIGHTS_IN_FORM_KEY } from "../../util/constants";
import { NumberField } from "../shared/numberField";

export const WeightsCalculator = () => {
  const [form, setForm] = useState({
    [WEIGHTS_IN_FORM_KEY.ORM]: "",
    [WEIGHTS_IN_FORM_KEY.RI]: "",
    [WEIGHTS_IN_FORM_KEY.REPS]: "",
  });

  const isInvalid =
    !form[WEIGHTS_IN_FORM_KEY.ORM] ||
    !form[WEIGHTS_IN_FORM_KEY.RI] ||
    !form[WEIGHTS_IN_FORM_KEY.REPS];

  const onSubmitWeightsForm = (e) => {
    e.preventDefault();
    console.log(
      calculateWeights({
        oneRepMax: parseFloat(form[WEIGHTS_IN_FORM_KEY.ORM]),
        relativeIntensity: parseFloat(form[WEIGHTS_IN_FORM_KEY.RI]),
        reps: parseFloat(form[WEIGHTS_IN_FORM_KEY.REPS]),
      }),
    );
  };

  return (
    <form onSubmit={onSubmitWeightsForm}>
      <FormContext.Provider value={[form, setForm]}>
        <Flex direction="column" alignItems="center" gapY={4}>
          <NumberField
            id={WEIGHTS_IN_FORM_KEY.ORM}
            label="One Rep Max"
            root={{
              min: 1,
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
              min: 1,
              max: 12,
              formatOptions: { maximumFractionDigits: 0 },
            }}
            input={{
              placeholder: "##",
              maxWidth: "2.2ch",
            }}
          />
          <Button
            type="submit"
            size="2xl"
            minWidth="full"
            round="md"
            marginTop={8}
            fontSize="2xl"
            variant="surface"
            colorPalette="cyan"
            disabled={isInvalid}
          >
            <LuBot style={{ width: "2.25rem", height: "2.25rem" }} />
            Calculate
          </Button>
        </Flex>
      </FormContext.Provider>
    </form>
  );
};
