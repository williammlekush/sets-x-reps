import { Table } from "@chakra-ui/react";
import { STORAGE_KEY, useLocalStorage } from "../../../hooks/useLocalStorage";
import { ProtocolProvider } from "../../providers/ProtocolProvider";
import { ProtocolRow } from "./sub/ProtocolRow";

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
          <Table.ColumnHeader padding={0} />
          <Table.ColumnHeader textAlign="center">Sets</Table.ColumnHeader>
          <Table.ColumnHeader padding={0} />
          <Table.ColumnHeader textAlign="center">Weight</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {saved?.map((protocol, index) => (
          <ProtocolProvider key={index} protocol={protocol}>
            <ProtocolRow index={index} />
          </ProtocolProvider>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
