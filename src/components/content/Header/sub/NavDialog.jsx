import { Dialog, IconButton, Portal, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { LuMenu } from "react-icons/lu";
import DimensionsContext from "../../../../contexts/dimensionsContext";
import { ROUTE } from "../../../../util/constants";
import { NavButton } from "./NavButton";

export const NavDialog = () => {
  const { open, setOpen, onClose } = useDisclosure();

  const dimensions = useContext(DimensionsContext);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size={{ md: "sm" }}
      placement="top"
      motionPreset="slide-in-top"
    >
      <Dialog.Trigger asChild>
        <IconButton
          aria-label="Open Navigation"
          onClick={() => {}}
          size={{ base: "xl", md: "2xl" }}
          variant="ghost"
          rounded="full"
        >
          <LuMenu />
        </IconButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner marginTop={{ base: 0, md: "10vh" }}>
          <Dialog.Content
            marginTop={0}
            paddingTop={0}
            minHeight={{ base: "100vh", md: 552 }}
            maxHeight={{ base: "100vh", md: dimensions.height }}
            rounded={0}
          >
            <Dialog.Body
              padding={0}
              display="flex"
              flexDirection="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              {[
                { label: "Protocols", route: ROUTE.INDEX },
                { label: "One Rep Max", route: ROUTE.ORM },
                { label: "Saved Protocols", route: ROUTE.PROTOCOL_SAVED },
                { label: "Saved Maxes", route: ROUTE.ORM_SAVED },
                { label: "Close", onClick: () => onClose() },
              ].map((props) => (
                <NavButton
                  key={props.label + props.route}
                  callback={onClose}
                  {...props}
                />
              ))}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
