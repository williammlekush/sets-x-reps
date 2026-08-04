import { Text } from "@chakra-ui/react";

export const Emphasize = ({ children }) => (
  <Text as="span" fontWeight="semibold" color="cyan.400">
    {children}
  </Text>
);
