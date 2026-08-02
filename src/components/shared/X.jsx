import { Text } from "@chakra-ui/react";

export const X = ({ ...rest }) => (
  <Text
    fontSize={{ base: "2xl", md: "4xl" }}
    lineHeight={{ base: 0.5, md: 1 }}
    {...rest}
  >
    x
  </Text>
);
