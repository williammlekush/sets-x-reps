import { Heading, Stack } from "@chakra-ui/react";

export const Subsection = ({ id, heading, paragraphs = [] }) => {
  return (
    <Stack gap={2}>
      <Heading id={id} as="h4" size="xl">
        {heading}
      </Heading>
      <Stack gap={2}>{...paragraphs}</Stack>
    </Stack>
  );
};
