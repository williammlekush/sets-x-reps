import {
  CloseButton,
  Dialog,
  IconButton,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { LuCircleHelp } from "react-icons/lu";
import DimensionsContext from "../../../../contexts/dimensionsContext";

export const HelpDialog = () => {
  const { open, setOpen, onClose } = useDisclosure();

  const dimensions = useContext(DimensionsContext);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size={{ md: "sm" }}
      placement="top"
      motionPreset="slide-in-top"
      scrollBehavior="inside"
    >
      <Dialog.Trigger asChild>
        <IconButton
          aria-label="Open Help"
          size={{ base: "xl", md: "2xl" }}
          variant="ghost"
          rounded="full"
        >
          <LuCircleHelp />
        </IconButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop backdropFilter="auto" backdropBlur="lg" />
        <Dialog.Positioner marginTop={{ base: 0, md: "10vh" }}>
          <Dialog.Content
            marginTop={0}
            paddingTop={0}
            minHeight={{ base: "100vh", md: 552 }}
            maxHeight={{ base: "100vh", md: dimensions.height }}
            rounded={0}
            backgroundColor="rgba(17,17,17,0.6)"
          >
            <Dialog.Header>
              <Dialog.Title>How to use Exercise Protocols</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton rounded="full" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body
              padding={0}
              display="flex"
              flexDirection="column"
              alignItems="stretch"
            >
              {}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
