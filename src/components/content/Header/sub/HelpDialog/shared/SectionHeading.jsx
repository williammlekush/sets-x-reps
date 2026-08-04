import { Heading, HStack, Separator } from "@chakra-ui/react";

export const SectionHeading = ({ id, children }) => {
  return (
    <HStack gap={4}>
      <Heading id={id} as="h3" size="2xl">
        {children}
      </Heading>
      <Separator flex={1} borderColor="cyan.400" marginRight={8} />
    </HStack>
  );
};
