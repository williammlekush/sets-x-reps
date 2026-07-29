import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { LuBot } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import FormContext from "../../contexts/formContext";
import { NumberField } from "../shared/NumberField";

export const ProtocolInForm = () => {
  const { KEY, isValid } = useContext(FormContext);

  const navigate = useNavigate();

  const onSubmitProtocolInForm = (e) => {
    e.preventDefault();
    navigate("protocol-results");
  };

  return (
    <form onSubmit={onSubmitProtocolInForm}>
      <Flex direction="column" alignItems="center" gapY={4}>
        <NumberField
          id={KEY.ORM}
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
          id={KEY.RI}
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
          id={KEY.REPS}
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
          disabled={!isValid}
        >
          <LuBot style={{ width: "2.25rem", height: "2.25rem" }} />
          Calculate
        </Button>
      </Flex>
    </form>
  );
};
