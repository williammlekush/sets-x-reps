import { Button, Table } from "@chakra-ui/react";
import { useContext } from "react";
import CalculatorContext from "../../../../contexts/calculatorContext";
import {
  STORAGE_KEY,
  useLocalStorage,
} from "../../../../hooks/useLocalStorage";
import { PROTOCOL_KEY, TBL_COL_PROPS, UNIT } from "../../../../util/constants";
import { toaster } from "../../../ui/toaster";

export const UnitToggleCell = ({ index, number }) => {
  const { setKeyValue, replaceForKeyAtIndex } = useLocalStorage();

  const {
    state: [data],
    setUnits,
    applyUnits,
  } = useContext(CalculatorContext);

  const units = data[PROTOCOL_KEY.UNITS];

  const onClickUnitToggle = () => {
    const newUnits = units === UNIT.LB ? UNIT.KG : UNIT.LB;

    const newData = applyUnits({
      data,
      value: newUnits,
    });

    const key = STORAGE_KEY.PROTOCOLS;

    try {
      if (!replaceForKeyAtIndex(key, newData, index)) {
        setKeyValue(key, newData);
      }
    } catch {
      toaster.create({
        title: "Unit Update Failed",
        type: "error",
        duration: 3000,
        closable: true,
        description: "We could not update the units.",
      });
      return;
    }

    setUnits(newUnits);
  };

  return (
    <Table.Cell {...TBL_COL_PROPS} minWidth="64px">
      <Button
        onClick={onClickUnitToggle}
        variant="subtle"
        rounded="full"
        paddingX={3}
      >
        {number}
        {units}
      </Button>
    </Table.Cell>
  );
};
