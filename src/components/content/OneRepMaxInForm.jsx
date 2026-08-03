import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ORM_KEY, ROUTE } from "../../util/constants";
import { NumberField } from "../shared/NumberField";
import { SubmitCalculationButton } from "../shared/SubmitCalculationButton";
import { UnitToggle } from "../shared/UnitToggle";

export const OneRepMaxInForm = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTE.ORM_RESULTS);
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gapY={4} minWith="full">
        <NumberField
          id={ORM_KEY.REPS}
          label="Top Set Reps"
          root={{
            min: 1,
            max: 20,
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
