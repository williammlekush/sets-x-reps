import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { HELP_TITLE, ROUTE } from "../../../util/constants";
import { HelpDialog } from "./sub/HelpDialog";
import { NavDialog } from "./sub/NavDialog";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const hasBackButton = [ROUTE.PROTOCOL_RESULTS, ROUTE.ORM_RESULTS].includes(
    pathname,
  );

  const onClickBack = () =>
    navigate(pathname === ROUTE.ORM_RESULTS ? ROUTE.ORM : ROUTE.INDEX);

  return (
    <HStack
      justifyContent="space-between"
      marginTop={4}
      marginBottom={2}
      marginX={-8}
      colorPalette="cyan"
    >
      {hasBackButton ? (
        <Button
          aria-label="Return to calculator"
          onClick={onClickBack}
          variant="ghost"
          fontSize={{ base: "lg", md: "xl" }}
          size={{ base: "lg", md: "xl" }}
          rounded="full"
        >
          <LuArrowLeft style={{ width: "1.25em", height: "1.25em" }} />
          Calculator
        </Button>
      ) : (
        <NavDialog />
      )}
      <Text fontSize={{ base: "lg", md: "xl" }}>
        {[ROUTE.INDEX, ROUTE.PROTOCOL_RESULTS].includes(pathname)
          ? "Exercise Protocol"
          : [ROUTE.ORM, ROUTE.ORM_RESULTS].includes(pathname)
            ? "One Rep Max"
            : pathname === ROUTE.PROTOCOL_SAVED
              ? "Saved Protocols"
              : pathname === ROUTE.ORM_SAVED
                ? "Saved One Rep Maxes"
                : pathname === ROUTE.HELP
                  ? HELP_TITLE
                  : ""}
      </Text>
      <Box visibility={pathname === ROUTE.HELP ? "hidden" : "visible"}>
        <HelpDialog />
      </Box>
    </HStack>
  );
};
