import { Table } from "@chakra-ui/react";
import { STORAGE_KEY, useLocalStorage } from "../../../hooks/useLocalStorage";
import { TBL_COL_PROPS } from "../../../util/constants";
import { ProtocolProvider } from "../../providers/ProtocolProvider";
import { ProtocolRow } from "./sub/ProtocolRow";

export const ProtocolsTable = () => {
  const { getKeyValue } = useLocalStorage();

  const saved = getKeyValue(STORAGE_KEY.PROTOCOLS);

  return (
    <Table.ScrollArea maxWidth="full" display="flex" justifyContent="center">
      <Table.Root size="lg" maxWidth="md">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader {...TBL_COL_PROPS}>RI</Table.ColumnHeader>
            <Table.ColumnHeader {...TBL_COL_PROPS}>ORM</Table.ColumnHeader>
            <Table.ColumnHeader {...TBL_COL_PROPS}>Reps</Table.ColumnHeader>
            <Table.ColumnHeader padding={0} />
            <Table.ColumnHeader {...TBL_COL_PROPS}>Sets</Table.ColumnHeader>
            <Table.ColumnHeader padding={0} />
            <Table.ColumnHeader {...TBL_COL_PROPS}>Weight</Table.ColumnHeader>
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
    </Table.ScrollArea>
  );
};
