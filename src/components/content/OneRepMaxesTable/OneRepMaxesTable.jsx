import { Table } from "@chakra-ui/react";
import { STORAGE_KEY, useLocalStorage } from "../../../hooks/useLocalStorage";
import { TBL_COL_PROPS } from "../../../util/constants";
import { OneRepMaxProvider } from "../../providers/OneRepMaxProvider";
import { OneRepMaxRow } from "./OneRepMaxRow";

export const OneRepMaxesTable = () => {
  const { getKeyValue } = useLocalStorage();

  const saved = getKeyValue(STORAGE_KEY.ORMS);

  return (
    <Table.ScrollArea maxWidth="full" display="flex" justifyContent="center">
      <Table.Root size="lg" maxWidth="md">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader {...TBL_COL_PROPS} textAlign="left">
              Top Set
            </Table.ColumnHeader>
            <Table.ColumnHeader {...TBL_COL_PROPS}>
              One Rep Max
            </Table.ColumnHeader>
            <Table.ColumnHeader {...TBL_COL_PROPS} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {saved?.map((protocol, index) => (
            <OneRepMaxProvider key={index} protocol={protocol}>
              <OneRepMaxRow index={index} />
            </OneRepMaxProvider>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
