"use client";

import { DrawerUsage } from "./usage";

export const DrawerSize = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <DrawerUsage size="sm" />
      <DrawerUsage size="md" />
      <DrawerUsage size="lg" />
      <DrawerUsage size="xl" />
      <DrawerUsage size="2xl" />
      <DrawerUsage size="3xl" />
      <DrawerUsage size="4xl" />
      <DrawerUsage size="5xl" />
      <DrawerUsage size="full" />
    </div>
  );
};
