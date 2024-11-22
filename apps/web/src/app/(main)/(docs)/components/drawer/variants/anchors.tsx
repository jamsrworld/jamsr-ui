"use client";

import { DrawerUsage } from "./usage";

export const DrawerAnchors = () => {
  return (
    <div className="flex gap-4">
      <DrawerUsage anchor="left" />
      <DrawerUsage anchor="right" />
      <DrawerUsage anchor="top" />
      <DrawerUsage anchor="bottom" />
    </div>
  );
};
