"use client";

import { Button, toast, type ToastProps, ToastProvider } from "@jamsr-ui/react";

export const DefaultToast = () => {
  const radii: ToastProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  const handleClickSuccess = () => {
    toast.success("I am a toast");
  };

  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <ToastProvider key={radius} radius={radius}></ToastProvider>
      ))}
      <Button onClick={handleClickSuccess}>Success</Button>
    </div>
  );
};
