import { SegmentGroup } from "@chakra-ui/react";
import { useContext } from "react";
import ProtocolContext from "../../contexts/protocolContext";
import { PROTOCOL_KEY, UNIT } from "../../util/constants";

export const UnitToggle = () => {
  const {
    state: [data, _],
    toggleUnits,
  } = useContext(ProtocolContext);

  return (
    <SegmentGroup.Root
      value={data[PROTOCOL_KEY.UNITS]}
      onValueChange={(e) => toggleUnits(e.value)}
      defaultValue={data[PROTOCOL_KEY.UNITS]}
      orientation="vertical"
      height={28}
      width={18}
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
        fontSize="3xl"
        height={28}
        items={Object.values(UNIT)}
      />
    </SegmentGroup.Root>
  );
};
