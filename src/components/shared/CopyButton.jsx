import { Button, Clipboard } from "@chakra-ui/react";
import { useContext } from "react";
import CalculatorContext from "../../contexts/calculatorContext";

export const CopyButton = ({ value }) => {
  const { isValid } = useContext(CalculatorContext);

  return (
    <Clipboard.Root value={value} minWidth="full">
      <Clipboard.Trigger asChild>
        <Button
          variant="outline"
          disabled={!isValid}
          size={{ base: "xl", md: "2xl" }}
          fontSize={{ base: "xl", md: "2xl" }}
          minWidth="full"
          rounded="md"
          colorPalette="cyan"
        >
          <Clipboard.Indicator />
          <Clipboard.CopyText />
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
};
