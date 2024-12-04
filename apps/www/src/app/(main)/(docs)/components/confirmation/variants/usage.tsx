"use client";

import { Button, useConfirmation } from "@jamsr-ui/react";

export const ConfirmationUsage = () => {
  const { confirm } = useConfirmation();
  const handleClick = () =>
    confirm({
      message: "Are you sure want to delete?",
      title: "Warning!",
      onConfirm() {},
      onCancel() {},
    });
  return <Button onClick={handleClick}>Delete</Button>;
};
