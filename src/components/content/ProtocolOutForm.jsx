import { Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../../contexts/formContext";
import { NumberField } from "../shared/NumberField";

export const ProtocolOutForm = () => {
  const { KEY, loadProtocol } = useContext(FormContext);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loadProtocol()) {
      navigate("/");
    }
  }, []);

  return (
    <Flex direction="column" alignItems="center" gapY={4}>
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
    </Flex>
  );
};
