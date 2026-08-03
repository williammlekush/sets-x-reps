import { FormatNumber, Table, useBreakpointValue } from "@chakra-ui/react";
import { useContext } from "react";
import { LuArrowRight } from "react-icons/lu";
import CalculatorContext from "../../../contexts/calculatorContext";
import { STORAGE_KEY } from "../../../hooks/useLocalStorage";
import { ORM_KEY, TBL_COL_PROPS } from "../../../util/constants";
import { UnitToggleButton } from "../../shared/UnitToggleButton";
import { UseORMInProtocolButton } from "../../shared/UseORMInProtcolButton";

export const OneRepMaxRow = ({ index }) => {
  const {
    state: [data, _],
  } = useContext(CalculatorContext);

  const label = useBreakpointValue({
    base: <LuArrowRight />,
    md: (
      <>
        Use
        <LuArrowRight />
      </>
    ),
  });

  return (
    <Table.Row key={index}>
      <Table.Cell {...TBL_COL_PROPS}>
        {data[ORM_KEY.REPS]} x{" "}
        <UnitToggleButton
          index={index}
          number={
            <FormatNumber
              value={parseFloat(data[ORM_KEY.WEIGHT])}
              minimumFractionDigits={2}
              maximumFractionDigits={2}
              roundingIncrement={25}
            />
          }
          dataKey={STORAGE_KEY.ORMS}
        />
      </Table.Cell>
      <Table.Cell {...TBL_COL_PROPS} textAlign="center" minWidth="112px">
        <UnitToggleButton
          index={index}
          number={
            <FormatNumber
              value={parseFloat(data[ORM_KEY.ORM])}
              minimumFractionDigits={2}
              maximumFractionDigits={2}
              roundingIncrement={25}
            />
          }
          dataKey={STORAGE_KEY.ORMS}
        />
      </Table.Cell>
      <Table.Cell {...TBL_COL_PROPS}>
        <UseORMInProtocolButton
          label={label}
          variant="subtle"
          size="sm"
          fontSize="sm"
          rounded="full"
        />
      </Table.Cell>
    </Table.Row>
  );
};
