import { FormatNumber, Table } from "@chakra-ui/react";
import { STORAGE_KEY, useLocalStorage } from "../../hooks/useLocalStorage";
import { PROTOCOL_KEY } from "../../util/constants";

export const ProtocolsTable = () => {
  const { getKeyValue } = useLocalStorage();

  const saved = getKeyValue(STORAGE_KEY.PROTOCOLS);

  return (
    <Table.Root size="lg">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader textAlign="center">RI</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">ORM</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">Reps</Table.ColumnHeader>
          <Table.ColumnHeader />
          <Table.ColumnHeader textAlign="center">Sets</Table.ColumnHeader>
          <Table.ColumnHeader />
          <Table.ColumnHeader textAlign="center">Weight</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {saved.map((protocol, index) => (
          <Table.Row key={index}>
            <Table.Cell textAlign="center">
              {protocol[PROTOCOL_KEY.RI]}
            </Table.Cell>
            <Table.Cell textAlign="center">
              {protocol[PROTOCOL_KEY.ORM]}
              {protocol[PROTOCOL_KEY.UNITS]}
            </Table.Cell>
            <Table.Cell textAlign="center">
              {protocol[PROTOCOL_KEY.REPS]}
            </Table.Cell>
            <Table.Cell textAlign="center">x</Table.Cell>
            <Table.Cell textAlign="center">
              {protocol[PROTOCOL_KEY.SETS]}
            </Table.Cell>
            <Table.Cell textAlign="center">x</Table.Cell>
            <Table.Cell textAlign="center">
              <FormatNumber
                value={parseFloat(protocol[PROTOCOL_KEY.WEIGHT])}
                minimumFractionDigits={2}
                maximumFractionDigits={2}
                roundingIncrement={25}
              />
              {protocol[PROTOCOL_KEY.UNITS]}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
