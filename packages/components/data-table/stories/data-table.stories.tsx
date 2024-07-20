import { type Meta, type StoryObj } from "@storybook/react";
import { DataTable } from "../src";
import { COLUMNS, USERS } from "./columns";

const meta: Meta<typeof DataTable> = {
  title: "Components/Data Table",
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <DataTable
        columns={COLUMNS}
        isServer={false}
        sorting={{
          id: "registeredAt",
          desc: false,
        }}
        data={USERS}
        rowCount={USERS.length}
      />
    );
  },
};

export const Server: Story = {
  render: () => {
    return (
      <DataTable
        columns={COLUMNS}
        isServer
        sorting={{
          id: "registeredAt",
          desc: false,
        }}
        data={USERS}
        rowCount={USERS.length}
      />
    );
  },
};
