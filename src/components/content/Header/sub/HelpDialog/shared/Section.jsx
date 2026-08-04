import { Stack } from "@chakra-ui/react";
import { SectionHeading } from "./SectionHeading";

export const Section = ({ heading, subsections = [] }) => {
  return (
    <Stack gap={4}>
      <SectionHeading>{heading}</SectionHeading>
      <Stack fontSize="md" gap={4} paddingX={2}>
        {...subsections}
      </Stack>
    </Stack>
  );
};
