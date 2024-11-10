"use client";

import { Button, toast, ToastProvider } from "@jamsr-ui/react";

export const DefaultToast = () => {
  const handleClick = () => {
    toast("I am a toast");
  };
  const handleClickError = () => {
    toast.error("I am a toast");
  };

  const handleClickSuccess = () => {
    toast.success("I am a toast");
  };

  return (
    <div className="flex flex-wrap gap-4">
      <ToastProvider />
      <Button onClick={handleClick}>Default</Button>
      <Button onClick={handleClickError}>Error</Button>
      <Button onClick={handleClickSuccess}>Success</Button>
    </div>
  );
};
