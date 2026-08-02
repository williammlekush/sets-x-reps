import { Container } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import DimensionsContext from "../../contexts/dimensionsContext";
import { Header } from "../content/Header";
import { Toaster } from "../ui/toaster";

export const Layout = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.borderBoxSize[0].inlineSize,
          height: entry.borderBoxSize[0].blockSize,
        });
      }
    });

    observer.observe(containerRef.current, { box: "border-box" });
    return () => observer.disconnect();
  }, []);

  return (
    <Container
      maxW={{ base: "full", md: "md" }}
      paddingTop={{ base: 0, md: "10vh" }}
      paddingX={0}
    >
      <Container
        paddingTop={2}
        paddingBottom={6}
        paddingX={10}
        flexDirection="column"
        border="1px solid red"
        ref={containerRef}
      >
        <DimensionsContext.Provider value={dimensions}>
          <Header />
          <Outlet />
          <Toaster />
        </DimensionsContext.Provider>
      </Container>
    </Container>
  );
};
