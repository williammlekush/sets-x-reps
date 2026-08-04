import { Text } from "@chakra-ui/react";

export const Emphasize = ({ children }) => (
  <Text display="inline" fontWeight="semibold" color="cyan.400">
    {children}
  </Text>
);
