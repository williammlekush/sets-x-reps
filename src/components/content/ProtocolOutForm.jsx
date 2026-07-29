import { Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../../contexts/formContext";
import { NumberDisplay } from "../shared/NumberDisplay";
import { NumberField } from "../shared/NumberField";
import { X } from "../shared/X";

export const ProtocolOutForm = () => {
  const {
    KEY,
    state: [data, _],
    loadProtocol,
  } = useContext(FormContext);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loadProtocol()) {
      navigate("/");
    }
  }, []);

  return (
    <Flex direction="column" alignItems="flex-start" gapY={4}>
      <NumberDisplay label="Sets" value={data[KEY.SETS]} />
      <X />
      <NumberField
        id={KEY.REPS}
        label="Reps"
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
      <X />
      <NumberDisplay
        label="Pounds (lb)"
        value={data[KEY.WEIGHT]}
        valueFormat={{
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          roundingIncrement: 25,
        }}
      />
    </Flex>
  );
};
