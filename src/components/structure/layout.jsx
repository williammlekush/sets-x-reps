import { Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Center height="vh">
      <Outlet />
    </Center>
  );
};
