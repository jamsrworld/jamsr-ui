import { Table } from "jamsrui/table";

export const TableEmptyState = () => {
  return (
    <Table
      aria-label="Example static collection table"
      variant="solid"
    >
      <Table.Header>
        <Table.Row>
          <Table.Column>Name</Table.Column>
          <Table.Column>Role</Table.Column>
          <Table.Column>Status</Table.Column>
        </Table.Row>
      </Table.Header>
      <Table.Body />
    </Table>
  );
};
