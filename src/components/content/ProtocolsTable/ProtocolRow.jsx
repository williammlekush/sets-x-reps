import { FormatNumber, Table } from "@chakra-ui/react";
import { useContext } from "react";
import CalculatorContext from "../../../contexts/calculatorContext";
import { STORAGE_KEY } from "../../../hooks/useLocalStorage";
import { PROTOCOL_KEY, TBL_COL_PROPS } from "../../../util/constants";
import { UnitToggleButton } from "../../shared/UnitToggleButton";

export const ProtocolRow = ({ index }) => {
  const {
    state: [data, _],
  } = useContext(CalculatorContext);

  return (
    <Table.Row key={index}>
      <Table.Cell {...TBL_COL_PROPS}>{data[PROTOCOL_KEY.RI]}</Table.Cell>
      <Table.Cell {...TBL_COL_PROPS} minWidth="64px">
        <UnitToggleButton
          index={index}
          number={
            <FormatNumber
              value={parseFloat(data[PROTOCOL_KEY.ORM])}
              minimumFractionDigits={2}
              maximumFractionDigits={2}
              roundingIncrement={25}
            />
          }
          dataKey={STORAGE_KEY.PROTOCOLS}
        />
      </Table.Cell>

      <Table.Cell {...TBL_COL_PROPS}>{data[PROTOCOL_KEY.REPS]}</Table.Cell>
      <Table.Cell textAlign="center" padding={0}>
        x
      </Table.Cell>
      <Table.Cell {...TBL_COL_PROPS}>{data[PROTOCOL_KEY.SETS]}</Table.Cell>
      <Table.Cell textAlign="center" padding={0}>
        x
      </Table.Cell>
      <Table.Cell {...TBL_COL_PROPS} minWidth="64px">
        <UnitToggleButton
          index={index}
          number={
            <FormatNumber
              value={parseFloat(data[PROTOCOL_KEY.WEIGHT])}
              minimumFractionDigits={2}
              maximumFractionDigits={2}
              roundingIncrement={25}
            />
          }
          dataKey={STORAGE_KEY.PROTOCOLS}
        />
      </Table.Cell>
    </Table.Row>
  );
};
