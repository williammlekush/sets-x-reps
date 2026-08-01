import { Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LuSave } from "react-icons/lu";
import { toaster } from "../../../../components/ui/toaster";
import ProtocolContext from "../../../../contexts/protocolContext";
import {
  STORAGE_KEY,
  useLocalStorage,
} from "../../../../hooks/useLocalStorage";

export const SaveButton = () => {
  const {
    state: [data, _],
    isValid,
  } = useContext(ProtocolContext);

  const { setKeyValue, pushToKey } = useLocalStorage();

  const onClickSave = () => {
    const key = STORAGE_KEY.PROTOCOLS;
    try {
      if (!pushToKey(key, data)) {
        setKeyValue(key, [data]);
      }
    } catch {
      toaster.create({
        title: "Storage Full",
        type: "error",
        duration: 10000,
        closable: true,
        description: (
          <>
            <Text>
              You've reached the limit for saved exercise protocols on this
              device.
            </Text>
            <Text>
              We are working on expanding the limit in a future update.
            </Text>
          </>
        ),
      });
    }
  };

  return (
    <Button
      onClick={onClickSave}
      disabled={!isValid}
      variant="surface"
      size={{ base: "xl", md: "2xl" }}
      fontSize={{ base: "xl", md: "2xl" }}
      minWidth="full"
      round="md"
      colorPalette="cyan"
    >
      <LuSave style={{ width: "1.25em", height: "1.25em" }} />
      Save
    </Button>
  );
};
