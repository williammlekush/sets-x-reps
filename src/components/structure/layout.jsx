import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../content/Header";
import { Toaster } from "../ui/toaster";

export const Layout = () => {
  const mdBreakpoint = useBreakpointValue("md");
  return (
    <Container
      maxW={{ base: "full", md: "md" }}
      paddingTop={{ base: 2, md: "10vh" }}
      paddingX={12}
      flexDirection="column"
      // border="1px solid red"
    >
      <Header />
      <Outlet />
      <Toaster />
    </Container>
  );
};
