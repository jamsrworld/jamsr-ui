"use client";

import { Button, toast, Toast } from "@jamsr-ui/react";

export const DefaultToast = () => {
  const handleClick = () => {
    toast("I am a toast");
  };
  return (
    <div>
      <Toast />
      <Button onClick={handleClick}>Toast</Button>
    </div>
  );
};
