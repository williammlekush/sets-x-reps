import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import CalculatorContext from "../../contexts/calculatorContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { SHARED_KEY, UNIT } from "../../util/constants";
import { toaster } from "../ui/toaster";

export const UnitToggleButton = ({ index, number, dataKey }) => {
  const { setKeyValue, replaceForKeyAtIndex } = useLocalStorage();

  const {
    state: [data],
    setUnits,
    applyUnits,
  } = useContext(CalculatorContext);

  const units = data[SHARED_KEY.UNITS];

  const onClickUnitToggle = () => {
    const newUnits = units === UNIT.LB ? UNIT.KG : UNIT.LB;

    const newData = applyUnits({
      data,
      value: newUnits,
    });

    try {
      if (!replaceForKeyAtIndex(dataKey, newData, index)) {
        setKeyValue(dataKey, newData);
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
    <Button
      onClick={onClickUnitToggle}
      variant="subtle"
      rounded="full"
      paddingX={3}
    >
      {number}
      {units}
    </Button>
  );
};
