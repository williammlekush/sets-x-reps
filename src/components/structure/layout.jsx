import { Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../content/Header";

export const Layout = () => {
  return (
    <Center height="vh" flexDirection="column">
      <Header />
      <Outlet />
    </Center>
  );
};
