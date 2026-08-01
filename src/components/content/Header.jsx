import { Button, HStack, IconButton } from "@chakra-ui/react";
import { LuArrowLeft, LuCircleHelp } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../../util/constants";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <HStack
      justifyContent="space-between"
      marginTop={4}
      marginBottom={2}
      marginX={-8}
      colorPalette="cyan"
    >
      <Button
        aria-label="Return to calculator"
        onClick={() => navigate(ROUTE.INDEX)}
        variant="ghost"
        fontSize={{ base: "lg", md: "xl" }}
        size={{ base: "lg", md: "xl" }}
        rounded="full"
        visibility={
          [ROUTE.PROTOCOL_RESULTS].includes(pathname) ? "visible" : "hidden"
        }
      >
        <LuArrowLeft style={{ width: "1.25em", height: "1.25em" }} />
        Calculator
      </Button>

      <IconButton
        aria-label="Open Help"
        size={{ base: "xl", md: "2xl" }}
        variant="ghost"
        rounded="full"
      >
        <LuCircleHelp />
      </IconButton>
    </HStack>
  );
};
