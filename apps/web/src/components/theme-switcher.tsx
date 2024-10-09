"use client";

import { Button } from "@jamsr-ui/react";

export const ThemeSwitcher = () => {
  const toggleTheme = () => {
    const body = document.documentElement;
    body?.classList.toggle("theme-dark");
    body?.classList.toggle("theme-light");
  };
  return <Button onClick={toggleTheme}>Theme</Button>;
};
