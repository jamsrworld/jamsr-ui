import { faker } from "@faker-js/faker";
import type { ColumnDef, SortingState } from "@tanstack/react-table";

export type User = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
};

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 100,
});

export async function fetchData(options: {
  pageIndex: number;
  pageSize: number;
  sorting: SortingState;
  keyword: string;
}) {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));
  const { keyword, pageIndex, pageSize, sorting = [] } = options;
  const { id, desc } = sorting[0] ?? {};

  const startRow = pageIndex * pageSize;
  const endRow = startRow + pageSize;

  const data = keyword.length
    ? USERS.filter(
        ({ username, email }) =>
          username.toLowerCase().includes(keyword.toLowerCase()) ||
          email.toLowerCase().includes(keyword.toLowerCase()),
      )
    : USERS;

  const sortedData = id
    ? [...data].sort((a, b) => {
        // @ts-expect-error TODO:fix
        const aValue = a[id];
        // @ts-expect-error TODO:fix
        const bValue = b[id];

        return desc ? (bValue > aValue ? 1 : -1) : bValue < aValue ? 1 : -1;
      })
    : data;

  return {
    rows: sortedData.slice(startRow, endRow),
    pageCount: Math.ceil(data.length / pageSize),
    rowCount: data.length,
  };
}

export const COLUMNS: ColumnDef<User>[] = [
  {
    accessorKey: "userId",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "birthdate",
    header: "Birthdate",
    accessorFn: (row) => row.birthdate.toLocaleDateString(),
  },
  {
    accessorKey: "registeredAt",
    header: "Registered At",
    accessorFn: (row) => row.registeredAt.toLocaleDateString(),
  },
];
