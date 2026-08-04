import { Heading, HStack, Separator, Stack } from "@chakra-ui/react";

export const Section = ({ id, heading, subsections = [] }) => {
  return (
    <Stack gap={4}>
      <HStack gap={4}>
        <Heading id={id} as="h3" size="2xl">
          {heading}
        </Heading>
        <Separator flex={1} borderColor="cyan.400" marginRight={8} />
      </HStack>
      <Stack fontSize="md" gap={4} paddingX={{ base: 0, md: 2 }}>
        {...subsections}
      </Stack>
    </Stack>
  );
};
