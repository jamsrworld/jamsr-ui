"use client";

import { Button, Confirmation, useConfirmation } from "@jamsr-ui/react";

export const ConfirmationUsage = () => {
  const { confirm } = useConfirmation();
  const handleClick = () =>
    confirm({
      message: "Are you sure want to delete?",
      title: "Warning!",
      onConfirm() {},
      onCancel() {},
    });
  return (
    <div>
      <Confirmation />
      <Button onClick={handleClick}>Delete</Button>
    </div>
  );
};
