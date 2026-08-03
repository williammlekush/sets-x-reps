import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { LuBot } from "react-icons/lu";
import CalculatorContext from "../../contexts/calculatorContext";

export const SubmitCalculationButton = () => {
  const { isValid } = useContext(CalculatorContext);

  return (
    <Button
      type="submit"
      size={{ base: "xl", md: "2xl" }}
      minWidth="full"
      rounded="md"
      marginTop={{ base: 4, md: 8 }}
      fontSize={{ base: "xl", md: "2xl" }}
      variant="surface"
      colorPalette="cyan"
      disabled={!isValid}
    >
      <LuBot style={{ width: "1.5em", height: "1.5em" }} />
      Calculate
    </Button>
  );
};
