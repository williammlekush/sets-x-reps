import { Button, Clipboard, Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProtocolContext from "../../contexts/protocolContext";
import { PROTOCOL_KEY, UNIT } from "../../util/constants";
import { NumberDisplay } from "../shared/NumberDisplay";
import { NumberField } from "../shared/NumberField";
import { UnitToggle } from "../shared/UnitToggle";
import { X } from "../shared/X";

export const ProtocolOutForm = () => {
  const {
    state: [data, setData],
    loadProtocol,
    isValid,
  } = useContext(ProtocolContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loadProtocol()) {
      navigate("/");
    }
  }, []);

  const onValueChangeReps = (e) => {
    const value = e.value;
    setData((prev) => ({ ...prev, [PROTOCOL_KEY.REPS]: value }));
    loadProtocol({ [PROTOCOL_KEY.REPS]: value });
  };

  const onValueChangeRelativeIntensity = (e) => {
    const value = e.value;
    setData((prev) => ({ ...prev, [PROTOCOL_KEY.RI]: value }));
    loadProtocol({ [PROTOCOL_KEY.RI]: value });
  };

  return (
    <Flex direction="column" gapY={10} minWith="full">
      <Flex alignItems="baseline" width="70%" justifyContent="space-between">
        <NumberDisplay
          label="Sets"
          value={data[PROTOCOL_KEY.SETS]}
          container={{ minWidth: "unset" }}
        />
        <X />
        <NumberField
          id={PROTOCOL_KEY.REPS}
          label="Reps"
          root={{
            min: 1,
            max: 12,
            formatOptions: { maximumFractionDigits: 0 },
            onValueChange: onValueChangeReps,
          }}
          input={{
            placeholder: "##",
            maxWidth: "2.2ch",
          }}
          fieldRoot={{ width: "unset" }}
          fieldLabel={{ marginTop: -2 }}
        />
      </Flex>
      <Flex direction="column" alignItems="flex-start" gapY={0}>
        <NumberField
          id={PROTOCOL_KEY.RI}
          label="RI"
          root={{
            min: 0,
            max: 1,
            formatOptions: { style: "percent" },
            onValueChange: onValueChangeRelativeIntensity,
          }}
          input={{
            placeholder: "0%",
            maxWidth: "4.5ch",
            fontSize: { base: "3xl", md: "4xl" },
          }}
          fieldRoot={{
            flexDirection: "row",
            alignItems: "center",
          }}
          fieldLabel={{
            fontStyle: { base: "3xl", md: "4xl" },
          }}
        />
        <NumberDisplay
          label={data[PROTOCOL_KEY.UNITS] === UNIT.KG ? "Kilograms" : "Pounds"}
          value={data[PROTOCOL_KEY.WEIGHT]}
          valueFormat={{
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            roundingIncrement: 25,
          }}
          endAddon={<UnitToggle />}
        />
        <Clipboard.Root
          value={
            `${data[PROTOCOL_KEY.SETS]} ${PROTOCOL_KEY.SETS}` +
            ` x ${data[PROTOCOL_KEY.REPS]} ${PROTOCOL_KEY.REPS}` +
            ` x ${data[PROTOCOL_KEY.WEIGHT]} ${data[PROTOCOL_KEY.UNITS]}` +
            ` (${data[PROTOCOL_KEY.RI]})`
          }
          minWidth="full"
        >
          <Clipboard.Trigger asChild>
            <Button
              variant="surface"
              disabled={!isValid}
              size={{ base: "xl", md: "2xl" }}
              fontSize={{ base: "xl", md: "2xl" }}
              marginTop={{ base: 4, md: 8 }}
              minWidth="full"
              round="md"
              colorPalette="cyan"
            >
              <Clipboard.Indicator />
              <Clipboard.CopyText />
            </Button>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Flex>
    </Flex>
  );
};
