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
import { HELP_TITLE } from "../../../../util/constants";
import { Help } from "../../Help/Help";

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
            paddingX={{ base: 4, md: 0 }}
          >
            <Dialog.Header
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Dialog.Title textStyle="xl">{HELP_TITLE}</Dialog.Title>
              <CloseButton
                rounded="full"
                onClick={onClose}
                colorPalette="cyan"
              />
            </Dialog.Header>
            <Dialog.Body>
              <Help />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
