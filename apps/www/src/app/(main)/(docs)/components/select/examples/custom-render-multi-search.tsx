"use client";

import { Avatar, Chip, Input, Select, SelectItem } from "@jamsr-ui/react";
import { useState } from "react";
import { users } from "./custom-render-complex";

export const SelectCustomRenderMultiSearch = () => {
  const [value, setValue] = useState("");
  const filteredValues =
    value.length > 0
      ? users.filter((u) => {
          const { name, email } = u;
          return (
            name.toLowerCase().includes(value.toLowerCase()) ||
            email.toLowerCase().includes(value.toLowerCase())
          );
        })
      : users;
  return (
    <Select
      disableTypeahead
      className="w-full min-w-[300px]"
      isMultiple
      renderValue={(values) => {
        const selectedUsers = users.filter((u) => values.includes(u.email));
        return (
          <div className="flex flex-wrap gap-1">
            {selectedUsers.map((item) => {
              return (
                <Chip
                  key={item.id}
                  classNames={{
                    content: "flex items-center gap-2 py-1",
                    base: "h-auto",
                  }}
                >
                  <Avatar
                    alt={item.name}
                    className="shrink-0"
                    size="sm"
                    src={item.avatar}
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col">
                    <span className="text-left text-sm">{item.name}</span>
                    <span className="text-xs text-foreground-secondary">
                      {item.email}
                    </span>
                  </div>
                </Chip>
              );
            })}
          </div>
        );
      }}
      onUncontrolledValueChange={() => setValue("")}
      topContent={
        <Input
          value={value}
          onValueChange={setValue}
          placeholder="Search..."
          variant="underlined"
          size="lg"
          autoComplete="off"
          type="search"
        />
      }
    >
      {filteredValues.map((user) => {
        return (
          <SelectItem key={user.id} value={user.email} label={user.name}>
            <div className="flex items-center gap-2">
              <Avatar
                alt={user.name}
                className="shrink-0"
                size="sm"
                src={user.avatar}
                width={100}
                height={100}
              />
              <div className="flex flex-col">
                <span className="text-left text-sm">{user.name}</span>
                <span className="text-xs text-default-400">{user.email}</span>
              </div>
            </div>
          </SelectItem>
        );
      })}
    </Select>
  );
};
