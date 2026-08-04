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
import { ExerciseProtocolsSection } from "./HelpDialog/sub/ExerciseProtocolsSection";
import { OneRepMaxSection } from "./HelpDialog/sub/OneRepMaxSection";

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
            minHeight={{ base: "100vh", md: 552 }}
            maxHeight={{ base: "100vh", md: dimensions.height }}
            rounded={0}
            backgroundColor="rgba(17,17,17,0.6)"
            paddingBottom={2}
          >
            <Dialog.Header
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Dialog.Title textStyle="xl">How to Everything</Dialog.Title>
              <CloseButton
                rounded="full"
                onClick={onClose}
                colorPalette="cyan"
              />
            </Dialog.Header>
            <Dialog.Body
              display="flex"
              flexDirection="column"
              alignItems="stretch"
              gap={8}
            >
              <ExerciseProtocolsSection />
              <OneRepMaxSection />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
