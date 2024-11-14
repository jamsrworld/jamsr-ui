"use client";

import { DrawerDefault } from "./default";

export const DrawerSize = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <DrawerDefault size="sm" />
      <DrawerDefault size="md" />
      <DrawerDefault size="lg" />
      <DrawerDefault size="xl" />
      <DrawerDefault size="2xl" />
      <DrawerDefault size="3xl" />
      <DrawerDefault size="4xl" />
      <DrawerDefault size="5xl" />
      <DrawerDefault size="full" />
    </div>
  );
};
