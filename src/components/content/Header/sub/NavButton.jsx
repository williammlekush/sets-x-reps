import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const NavButton = ({ label, route, callback, ...rest }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isOnRoute = pathname === route;

  return (
    <Button
      rounded={0}
      variant={isOnRoute ? "surface" : "outline"}
      flex={1}
      colorPalette="cyan"
      fontSize={{ base: "3xl", md: "4xl" }}
      gap={0}
      borderWidth="1px"
      borderColor="cyan.400"
      onClick={() => {
        if (!isOnRoute) {
          navigate(route);
          return;
        }
        callback();
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};
