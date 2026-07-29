import { Flex, FormatNumber, Text } from "@chakra-ui/react";

export const NumberDisplay = ({ label, value, valueFormat }) => {
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      gap={0}
      minWidth="full"
      lineHeight={1.25}
    >
      <Text fontSize="8xl">
        <FormatNumber value={parseFloat(value)} {...valueFormat} />
      </Text>
      <Text fontSize="4xl">{label}</Text>
    </Flex>
  );
};
