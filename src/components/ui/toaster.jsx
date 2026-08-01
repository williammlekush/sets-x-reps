"use client";

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
  useBreakpointValue,
} from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "top",
  pauseOnPageIdle: true,
});

export const Toaster = () => {
  const iconStyle = useBreakpointValue({
    md: { width: "2rem", height: "2rem" },
  });

  const fontSize = useBreakpointValue({ base: "md", md: "2xl" });

  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root width={{ md: "lg" }}>
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator style={iconStyle} />
            )}
            <Stack gap="1" flex="1" maxWidth="100%">
              {toast.title && (
                <Toast.Title fontSize={fontSize} height="fit" lineHeight={1.25}>
                  {toast.title}
                </Toast.Title>
              )}
              {toast.description && (
                <Toast.Description
                  fontSize={fontSize}
                  height="fit"
                  lineHeight={1.25}
                >
                  {toast.description}
                </Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            {toast.closable && <Toast.CloseTrigger fontSize={fontSize} />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
