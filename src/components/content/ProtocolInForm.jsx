import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PROTOCOL_KEY, ROUTE } from "../../util/constants";
import { NumberField } from "../shared/NumberField";
import { SubmitCalculationButton } from "../shared/SubmitCalculationButton";
import { UnitToggle } from "../shared/UnitToggle";

export const ProtocolInForm = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTE.PROTOCOL_RESULTS);
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gapY={4} minWith="full">
        <Flex gapX={0}>
          <NumberField
            id={PROTOCOL_KEY.ORM}
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
            endAddon={<UnitToggle />}
          />
        </Flex>
        <NumberField
          id={PROTOCOL_KEY.RI}
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
          id={PROTOCOL_KEY.REPS}
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
        <SubmitCalculationButton />
      </Flex>
    </form>
  );
};
