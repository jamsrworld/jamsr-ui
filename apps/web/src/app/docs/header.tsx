"use client";

import { InfoIcon } from "@jamsrui/icons";
import { IconButton } from "ui/icon-button";
import React from "react";

export const AppHeader = () => {
  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex items-center py-2 px-4 bg-surface gap-2 justify-between">
      <div />
      <IconButton
        variant="soft"
        color="default"
        label="Toggle Theme"
        onClick={handleThemeToggle}
      >
        <InfoIcon />
      </IconButton>
    </div>
  );
};
