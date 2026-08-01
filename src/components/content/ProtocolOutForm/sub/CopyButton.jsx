import { Button, Clipboard } from "@chakra-ui/react";
import { useContext } from "react";
import ProtocolContext from "../../../../contexts/protocolContext";
import { PROTOCOL_KEY } from "../../../../util/constants";

export const CopyButton = () => {
  const {
    state: [data, _],
    isValid,
  } = useContext(ProtocolContext);

  return (
    <Clipboard.Root
      value={
        `${data[PROTOCOL_KEY.SETS]} ${PROTOCOL_KEY.SETS}` +
        ` x ${data[PROTOCOL_KEY.REPS]} ${PROTOCOL_KEY.REPS}` +
        ` x ${Math.round((4 * parseFloat(data[PROTOCOL_KEY.WEIGHT])) / 4).toFixed(2)} ${data[PROTOCOL_KEY.UNITS]}` +
        ` (${data[PROTOCOL_KEY.RI]})`
      }
      minWidth="full"
    >
      <Clipboard.Trigger asChild>
        <Button
          variant="outline"
          disabled={!isValid}
          size={{ base: "xl", md: "2xl" }}
          fontSize={{ base: "xl", md: "2xl" }}
          minWidth="full"
          round="md"
          colorPalette="cyan"
        >
          <Clipboard.Indicator />
          <Clipboard.CopyText />
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
};
