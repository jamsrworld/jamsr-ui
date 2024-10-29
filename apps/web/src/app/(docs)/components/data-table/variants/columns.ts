import { faker } from "@faker-js/faker";
import type { ColumnDef } from "@tanstack/react-table";

type User = {
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
    username: faker.internet.userName(),
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
