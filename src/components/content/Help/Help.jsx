import { Flex } from "@chakra-ui/react";
import { ExerciseProtocolsSection } from "./sub/ExerciseProtocolsSection";
import { OneRepMaxSection } from "./sub/OneRepMaxSection";

export const Help = () => {
  return (
    <Flex direction="column" alignItems="stretch" gap={8}>
      <ExerciseProtocolsSection />
      <OneRepMaxSection />
    </Flex>
  );
};
