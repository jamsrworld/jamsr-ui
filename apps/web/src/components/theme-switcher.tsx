"use client";

import { Button } from "@jamsr-ui/react";

export const ThemeSwitcher = () => {
  const toggleTheme = () => {
    const body = document.documentElement;
    body?.classList.toggle("dark");
    body?.classList.toggle("light");
  };
  return <Button onClick={toggleTheme}>Theme</Button>;
};
