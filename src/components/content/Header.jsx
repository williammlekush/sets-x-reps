import { Button, HStack } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../../util/constants";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(
    JSON.stringify(pathname),
    [ROUTE.PROTOCOL_RESULTS].includes(pathname),
  );

  return (
    <HStack justifyContent="space-between" marginBottom={4}>
      {[ROUTE.PROTOCOL_RESULTS].includes(pathname) && (
        <Button
          aria-label="go back"
          onClick={() => navigate(ROUTE.INDEX)}
          variant="ghost"
          fontSize="lg"
          size="lg"
          round="md"
        >
          <LuArrowLeft style={{ width: "1.25em", height: "1.25em" }} />
          Calculator
        </Button>
      )}
    </HStack>
  );
};
