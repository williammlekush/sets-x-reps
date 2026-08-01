import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { LuBot } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import ProtocolContext from "../../contexts/protocolContext";
import { PROTOCOL_KEY } from "../../util/constants";
import { NumberField } from "../shared/NumberField";
import { UnitToggle } from "../shared/UnitToggle";

export const ProtocolInForm = () => {
  const { isValid } = useContext(ProtocolContext);

  const navigate = useNavigate();

  const onSubmitProtocolInForm = (e) => {
    e.preventDefault();
    navigate("protocol-results");
  };

  return (
    <form onSubmit={onSubmitProtocolInForm}>
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
        <Button
          type="submit"
          size={{ base: "xl", md: "2xl" }}
          minWidth="full"
          round="md"
          marginTop={{ base: 4, md: 8 }}
          fontSize={{ base: "xl", md: "2xl" }}
          variant="surface"
          colorPalette="cyan"
          disabled={!isValid}
        >
          <LuBot style={{ width: "1.5em", height: "1.5em" }} />
          Calculate
        </Button>
      </Flex>
    </form>
  );
};
