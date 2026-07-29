import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProtocolContext from "../../contexts/protocolContext";
import { PROTOCOL_KEY } from "../../util/constants";
import { NumberDisplay } from "../shared/NumberDisplay";
import { NumberField } from "../shared/NumberField";
import { X } from "../shared/X";

export const ProtocolOutForm = () => {
  const {
    state: [data, setData],
    loadProtocol,
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
    <Flex direction="column" alignItems="flex-start" gapY={4}>
      <NumberDisplay label="Sets" value={data[PROTOCOL_KEY.SETS]} />
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
      />
      <X />
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
            fontSize: "4xl",
          }}
          fieldRoot={{
            flexDirection: "row",
            alignItems: "center",
          }}
          fieldLabel={{
            fontStyle: "4xl",
          }}
        />
        <NumberDisplay
          label="Pounds (lb)"
          value={data[PROTOCOL_KEY.WEIGHT]}
          valueFormat={{
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            roundingIncrement: 25,
          }}
        />
      </Flex>
    </Flex>
  );
};
