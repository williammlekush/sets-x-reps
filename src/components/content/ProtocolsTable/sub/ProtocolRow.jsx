import { FormatNumber, Table } from "@chakra-ui/react";
import { useContext } from "react";
import ProtocolContext from "../../../../contexts/protocolContext";
import { PROTOCOL_KEY } from "../../../../util/constants";
import { UnitToggleCell } from "./UnitToggleCell";

export const ProtocolRow = ({ index }) => {
  const {
    state: [data, _],
  } = useContext(ProtocolContext);

  return (
    <Table.Row key={index}>
      <Table.Cell textAlign="center">{data[PROTOCOL_KEY.RI]}</Table.Cell>
      <UnitToggleCell
        index={index}
        number={
          <FormatNumber
            value={parseFloat(data[PROTOCOL_KEY.ORM])}
            minimumFractionDigits={2}
            maximumFractionDigits={2}
            roundingIncrement={25}
          />
        }
      />
      <Table.Cell textAlign="center">{data[PROTOCOL_KEY.REPS]}</Table.Cell>
      <Table.Cell textAlign="center" padding={0}>
        x
      </Table.Cell>
      <Table.Cell textAlign="center">{data[PROTOCOL_KEY.SETS]}</Table.Cell>
      <Table.Cell textAlign="center" padding={0}>
        x
      </Table.Cell>
      <UnitToggleCell
        index={index}
        number={
          <FormatNumber
            value={parseFloat(data[PROTOCOL_KEY.WEIGHT])}
            minimumFractionDigits={2}
            maximumFractionDigits={2}
            roundingIncrement={25}
          />
        }
      />
    </Table.Row>
  );
};
