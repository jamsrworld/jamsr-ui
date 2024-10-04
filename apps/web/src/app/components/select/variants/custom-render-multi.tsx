"use client";

import { Avatar, Chip, Select, SelectItem } from "@jamsr-ui/react";
import { users } from "./custom-render-complex";

export const SelectCustomRenderMulti = () => {
  return (
    <div className="min-h-[300px]">
      <Select
        className="w-full min-w-[300px] max-w-md"
        isMultiple
        renderValue={(values) => {
          const selectedUsers = users.filter((u) => values.includes(u.email));
          return (
            <div className="flex flex-wrap gap-2">
              {selectedUsers.map((item) => {
                return (
                  <Chip key={item.id} className="flex items-center gap-2">
                    <Avatar
                      alt={item.name}
                      className="shrink-0"
                      size="sm"
                      src={item.avatar}
                    />
                    <div className="flex flex-col">
                      <span className="text-left text-sm">{item.name}</span>
                      <span className="text-xs text-default-400">
                        {item.email}
                      </span>
                    </div>
                  </Chip>
                );
              })}
            </div>
          );
        }}
      >
        {users.map((user) => {
          return (
            <SelectItem key={user.id} value={user.email} label={user.name}>
              <div className="flex items-center gap-2">
                <Avatar
                  alt={user.name}
                  className="shrink-0"
                  size="sm"
                  src={user.avatar}
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
    </div>
  );
};
