import { Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LuCheck, LuSave } from "react-icons/lu";
import CalculatorContext from "../../../../contexts/calculatorContext";
import { useDelayedBoolean } from "../../../../hooks/useDelayedBoolean.js";
import {
  STORAGE_KEY,
  useLocalStorage,
} from "../../../../hooks/useLocalStorage";
import { toaster } from "../../../ui/toaster";

export const SaveButton = () => {
  const {
    state: [data, _],
    isValid,
  } = useContext(CalculatorContext);

  const { setKeyValue, pushToKey } = useLocalStorage();

  const [showSaveSuccess, triggerShowSaveSuccess] = useDelayedBoolean(2000);

  const onClickSave = () => {
    const key = STORAGE_KEY.PROTOCOLS;
    try {
      if (!pushToKey(key, data)) {
        setKeyValue(key, [data]);
      }
      triggerShowSaveSuccess();
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
      {showSaveSuccess ? (
        <LuCheck style={{ width: "1.25em", height: "1.25em" }} />
      ) : (
        <LuSave style={{ width: "1.25em", height: "1.25em" }} />
      )}
      {showSaveSuccess ? "Saved" : "Save"}
    </Button>
  );
  S;
};
