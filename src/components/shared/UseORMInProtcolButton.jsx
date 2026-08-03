import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import CalculatorContext from "../../contexts/calculatorContext";
import { ROUTE, SHARED_KEY } from "../../util/constants";

export const UseORMInProtocolButton = ({ label, ...rest }) => {
  const {
    state: [data, _],
    isValid,
  } = useContext(CalculatorContext);

  const navigate = useNavigate();
  const onClickUse = () =>
    navigate(ROUTE.INDEX, {
      state: {
        [SHARED_KEY.ORM]: data[SHARED_KEY.ORM],
        [SHARED_KEY.UNITS]: data[SHARED_KEY.UNITS],
      },
    });

  return (
    <Button
      variant="surface"
      disabled={!isValid}
      size={{ base: "xl", md: "2xl" }}
      fontSize={{ base: "xl", md: "2xl" }}
      minWidth="full"
      rounded="md"
      colorPalette="cyan"
      {...rest}
      aria-label="Open the new exercise protocol calculator with this one rep max"
      onClick={onClickUse}
    >
      {label ?? (
        <>
          Use in Exercise Protocol
          <LuArrowRight style={{ width: "1.5em", height: "1.5em" }} />
        </>
      )}
    </Button>
  );
};
