"use client";

import { Button } from "@jamsr-ui/react";
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
    <Button isIconOnly onClick={toggleTheme}>
      {!isDark ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
