import { Heading, HStack, Separator, Stack } from "@chakra-ui/react";

export const Section = ({ heading, subsections = [] }) => {
  return (
    <Stack gap={4}>
      <HStack gap={4}>
        <Heading as="h3" size="2xl">
          {heading}
        </Heading>
        <Separator flex={1} borderColor="cyan.400" marginRight={8} />
      </HStack>
      <Stack fontSize="md" gap={4} paddingX={{ base: 0, md: 2 }}>
        {...subsections.map((sub, index) => ({ ...sub, key: `sub-${index}` }))}
      </Stack>
    </Stack>
  );
};
