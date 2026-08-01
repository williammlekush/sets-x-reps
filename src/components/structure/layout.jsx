import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../content/Header";

export const Layout = () => {
  const mdBreakpoint = useBreakpointValue("md");
  return (
    <Container
      maxW={{ base: "full", md: "md" }}
      paddingTop={{ base: 2, md: "10vh" }}
      paddingX={12}
      flexDirection="column"
      borderWidth="1"
    >
      <Header />
      <Outlet />
    </Container>
  );
};
