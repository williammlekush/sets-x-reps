import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import CalculatorContext from "../../contexts/calculatorContext";
import { ORM_KEY } from "../../util/constants";
import { NumberField } from "../shared/NumberField";
import { SubmitCalculationButton } from "../shared/SubmitCalculationButton";
import { UnitToggle } from "../shared/UnitToggle";

export const OneRepMaxInForm = () => {
  const { isValid } = useContext(CalculatorContext);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gapY={4} minWith="full">
        <NumberField
          id={ORM_KEY.REPS}
          label="Top Set Reps"
          root={{
            min: 1,
            max: 99,
            formatOptions: { maximumFractionDigits: 0 },
          }}
          input={{
            placeholder: "##",
            maxWidth: "2.2ch",
          }}
        />
        <Flex gapX={0}>
          <NumberField
            id={ORM_KEY.WEIGHT}
            label="Top Set Weight"
            root={{
              min: 1,
              max: 999,
              formatOptions: { maximumFractionDigits: 0 },
            }}
            input={{
              placeholder: "###",
              maxWidth: "3.2ch",
            }}
            endAddon={<UnitToggle />}
          />
        </Flex>
        <SubmitCalculationButton />
      </Flex>
    </form>
  );
};
