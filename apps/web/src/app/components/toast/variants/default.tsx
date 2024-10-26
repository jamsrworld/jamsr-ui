"use client";

import { Button, toast, ToastProvider } from "@jamsr-ui/react";

export const DefaultToast = () => {
  const handleClick = () => {
    toast("I am a toast");
  };
  return (
    <div>
      <ToastProvider />
      <Button onClick={handleClick}>Toast</Button>
    </div>
  );
};
