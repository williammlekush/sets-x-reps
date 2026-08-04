import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../../hooks/useTitle";
import { ROUTE } from "../../../util/constants";
import { ExerciseProtocolsSection } from "./sub/ExerciseProtocolsSection";
import { OneRepMaxSection } from "./sub/OneRepMaxSection";

export const Help = () => {
  const { pathname } = useLocation();

  useTitle(pathname === ROUTE.HELP ? `Repulator - Help` : document.title);

  return (
    <Flex direction="column" alignItems="stretch" gap={8}>
      <ExerciseProtocolsSection />
      <OneRepMaxSection />
    </Flex>
  );
};
