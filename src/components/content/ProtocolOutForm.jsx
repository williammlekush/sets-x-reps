import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CalculatorContext from "../../contexts/calculatorContext";
import { STORAGE_KEY } from "../../hooks/useLocalStorage";
import { PROTOCOL_KEY, ROUTE, UNIT } from "../../util/constants";
import { CopyButton } from "../shared/CopyButton";
import { NumberDisplay } from "../shared/NumberDisplay";
import { NumberField } from "../shared/NumberField";
import { SaveButton } from "../shared/SaveButton";
import { UnitToggle } from "../shared/UnitToggle";
import { X } from "../shared/X";

export const ProtocolOutForm = () => {
  const {
    state: [data, setData],
    calculate,
  } = useContext(CalculatorContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!calculate()) {
      navigate(ROUTE.INDEX);
    }
  }, []);

  const onValueChangeReps = (e) => {
    const value = e.value;
    setData((prev) => ({ ...prev, [PROTOCOL_KEY.REPS]: value }));
    calculate({ [PROTOCOL_KEY.REPS]: value });
  };

  const onValueChangeRelativeIntensity = (e) => {
    const value = e.value;
    setData((prev) => ({ ...prev, [PROTOCOL_KEY.RI]: value }));
    calculate({ [PROTOCOL_KEY.RI]: value });
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
            textStyle: { base: "3xl", md: "4xl" },
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
        <Flex direction="column" minWidth="full" gapY={4} marginTop={8}>
          <SaveButton dataKey={STORAGE_KEY.PROTOCOLS} />
          <CopyButton
            value={
              `${data[PROTOCOL_KEY.SETS]} ${PROTOCOL_KEY.SETS}` +
              ` x ${data[PROTOCOL_KEY.REPS]} ${PROTOCOL_KEY.REPS}` +
              ` x ${Math.round((4 * parseFloat(data[PROTOCOL_KEY.WEIGHT])) / 4).toFixed(2)} ${data[PROTOCOL_KEY.UNITS]}` +
              ` (${data[PROTOCOL_KEY.RI]})`
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
