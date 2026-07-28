import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { LuBot } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import FormContext from "../../contexts/formContext";
import { getProtocol } from "../../util/calculate";
import { PROTOCOL_IN_FORM_KEY } from "../../util/constants";
import { NumberField } from "../shared/NumberField";

export const ProtocolInForm = () => {
  const [form, setForm] = useState({
    [PROTOCOL_IN_FORM_KEY.ORM]: "",
    [PROTOCOL_IN_FORM_KEY.RI]: "",
    [PROTOCOL_IN_FORM_KEY.REPS]: "",
  });

  const isInvalid =
    !form[PROTOCOL_IN_FORM_KEY.ORM] ||
    !form[PROTOCOL_IN_FORM_KEY.RI] ||
    !form[PROTOCOL_IN_FORM_KEY.REPS];

  const navigate = useNavigate();

  const onSubmitProtocolInForm = (e) => {
    e.preventDefault();
    console.log(
      getProtocol({
        oneRepMax: parseFloat(form[PROTOCOL_IN_FORM_KEY.ORM]),
        relativeIntensity: parseFloat(form[PROTOCOL_IN_FORM_KEY.RI]),
        reps: parseFloat(form[PROTOCOL_IN_FORM_KEY.REPS]),
      }),
    );
    navigate("/protocol-results");
  };

  return (
    <form onSubmit={onSubmitProtocolInForm}>
      <FormContext.Provider value={[form, setForm]}>
        <Flex direction="column" alignItems="center" gapY={4}>
          <NumberField
            id={PROTOCOL_IN_FORM_KEY.ORM}
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
            id={PROTOCOL_IN_FORM_KEY.RI}
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
            id={PROTOCOL_IN_FORM_KEY.REPS}
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
