"use client";

import { DrawerDefault } from "./default";

export const DrawerAnchors = () => {
  return (
    <div className="flex gap-4">
      <DrawerDefault anchor="left" />
      <DrawerDefault anchor="right" />
      <DrawerDefault anchor="top" />
      <DrawerDefault anchor="bottom" />
    </div>
  );
};
