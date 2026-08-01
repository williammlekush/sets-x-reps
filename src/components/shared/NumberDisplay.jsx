import { Flex, FormatNumber, Group, Text } from "@chakra-ui/react";

export const NumberDisplay = ({
  label,
  value,
  valueFormat,
  endAddon,
  container,
}) => {
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      gap={0}
      minWidth="full"
      lineHeight={1.25}
      {...container}
    >
      <Group alignItems="flex-end" gapX={4}>
        <Text fontSize={{ base: "6xl", md: "8xl" }}>
          <FormatNumber value={parseFloat(value)} {...valueFormat} />
        </Text>
        {endAddon}
      </Group>
      <Text fontSize={{ base: "2xl", md: "4xl" }}>{label}</Text>
    </Flex>
  );
};
