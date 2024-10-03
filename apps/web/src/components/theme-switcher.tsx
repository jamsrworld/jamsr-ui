"use client";

import { Button } from "@jamsr-ui/react";

export const ThemeSwitcher = () => {
  const toggleTheme = () => {
    const body = document.querySelector("body");
    body?.classList.toggle("dark");
  };
  return <Button onClick={toggleTheme}>Theme</Button>;
};
