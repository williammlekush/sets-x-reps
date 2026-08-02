import { SegmentGroup } from "@chakra-ui/react";
import { useContext } from "react";
import ProtocolContext from "../../contexts/protocolContext";
import { PROTOCOL_KEY, UNIT } from "../../util/constants";

export const UnitToggle = () => {
  const {
    state: [data, _],
    setUnits,
  } = useContext(ProtocolContext);

  return (
    <SegmentGroup.Root
      value={data[PROTOCOL_KEY.UNITS]}
      onValueChange={(e) => setUnits(e.value)}
      defaultValue={data[PROTOCOL_KEY.UNITS]}
      orientation="vertical"
      height={{ base: 20, md: 28 }}
      width={{ base: 14, md: 18 }}
      css={{
        "--segment-indicator-bg": "colors.cyan.900",
        "& .chakra-segment-group__item": {
          color: "cyan.300",
          opacity: "0.5",
        },
        "& .chakra-segment-group__item": {
          color: "cyan.300",
          opacity: "0.5",
        },
        '& .chakra-segment-group__item[data-state="checked"]': {
          opacity: "1.0",
        },
      }}
    >
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        fontSize={{ base: "xl", md: "3xl" }}
        height={{ base: 20, md: 28 }}
        items={Object.values(UNIT)}
      />
    </SegmentGroup.Root>
  );
};
