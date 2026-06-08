"use client";

import { faker } from "@faker-js/faker";
import type { ColumnDef } from "@tanstack/react-table";
import { Avatar } from "jamsrui/avatar";
import { Chip } from "jamsrui/chip";
import { DataGrid } from "jamsrui/data-grid";
import { Text } from "jamsrui/text";

type User = {
  userId: string;
  username: string;
  fullName: string;
  avatar: string;
  city: string;
  country: string;
  registeredAt: Date;
  status: UserStatus;
  balance: string;
};

enum UserStatus {
  Active,
  Blocked,
  Pending,
  Review,
}

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username().toLowerCase(),
    fullName: faker.internet.displayName(),
    avatar: faker.image.avatar(),
    country: faker.location.country(),
    city: faker.location.city(),
    registeredAt: faker.date.past(),
    status: faker.helpers.enumValue(UserStatus),
    balance: faker.finance.amount(),
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 100,
});

export async function fetchData(options: {
  pageIndex: number;
  pageSize: number;
}) {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));

  const data = USERS;
  return {
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize,
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
    rowCount: data.length,
  };
}

export const COLUMNS = [
  {
    id: "select",
    header: () => <DataGrid.RowSelectAll />,
    cell: ({ row }) => <DataGrid.RowSelect row={row} />,
    enableSorting: false,
    enableHiding: false,
    maxSize: 50,
  },
  {
    accessorKey: "userId",
    header: ({ header }) => (
      <DataGrid.HeaderColumn header={header}>Name</DataGrid.HeaderColumn>
    ),
    cell({ row: { original } }) {
      const { status } = original;
      return (
        <div className="flex gap-2 items-center">
          <Avatar>
            <Avatar.Image src={original.avatar} />
            <Avatar.Indicator>
              <Chip
                color={
                  (status === UserStatus.Active && "success") ||
                  (status === UserStatus.Review && "primary") ||
                  (status === UserStatus.Pending && "warning") ||
                  "danger"
                }
                variant="dot"
                isSquare
              >
                <Chip.Dot />
              </Chip>
            </Avatar.Indicator>
          </Avatar>
          <div className="flex flex-col gap-1">
            <Text>{original.fullName.slice(0, 40)}</Text>
            <Text
              variant="caption"
              className="text-foreground-secondary"
            >
              {original.username}
            </Text>
          </div>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "country",
    header: ({ header }) => (
      <DataGrid.HeaderColumn header={header}>Country</DataGrid.HeaderColumn>
    ),
    cell: ({ row: { original } }) => {
      const { city, country } = original;
      return (
        <div>
          <Text>{country}</Text>
          <Text
            className="text-foreground-secondary"
            variant="caption"
          >
            {city}
          </Text>
        </div>
      );
    },
  },
  {
    accessorKey: "balance",
    header: ({ header }) => (
      <DataGrid.HeaderColumn header={header}>Balance</DataGrid.HeaderColumn>
    ),
    accessorFn: ({ balance }) => `$${balance}`,
  },
  {
    accessorKey: "status",
    header: ({ header }) => (
      <DataGrid.HeaderColumn
        header={header}
        hideDropdown
      >
        Status
      </DataGrid.HeaderColumn>
    ),
    cell({ row: { original } }) {
      const { status } = original;
      return (
        <Chip
          size="sm"
          variant="soft"
          isBordered
          color={
            (status === UserStatus.Active && "success") ||
            (status === UserStatus.Review && "primary") ||
            (status === UserStatus.Pending && "warning") ||
            "danger"
          }
          radius="md"
        >
          {UserStatus[status]}
        </Chip>
      );
    },
  },
  {
    accessorKey: "registeredAt",
    header: ({ header }) => (
      <DataGrid.HeaderColumn header={header}>
        Registered At
      </DataGrid.HeaderColumn>
    ),
    meta: {
      headerTitle: "Registered At",
    },
    accessorFn: (row) =>
      row.registeredAt.toLocaleDateString("en-In", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
  },
] satisfies ColumnDef<User>[];
