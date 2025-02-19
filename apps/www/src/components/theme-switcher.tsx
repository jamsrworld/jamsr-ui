"use client";

import { IconButton } from "@jamsr-ui/react";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const body = document.documentElement;
    setIsDark(!isDark);
    body?.classList.remove(isDark ? "dark" : "light");
    body?.classList.add(isDark ? "light" : "dark");
  };

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDark(isDark);
  }, [isDark]);

  return (
    <IconButton
      label="Toggle Theme"
      variant="light"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
    >
      {!isDark ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};
