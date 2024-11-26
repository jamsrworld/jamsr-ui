"use client";

import { Button, useConfirmation } from "@jamsr-ui/react";

export const ConfirmationColors = () => {
  const { confirm } = useConfirmation();
  const handleClick = () =>
    confirm({
      message: "Are you sure want to delete?",
      title: "Warning!",
      onConfirm() {},
      onCancel() {},
      cancelBtnProps: {
        color:"danger",
        variant: "solid",
      },
      confirmBtnProps: {
        color: "success",
        variant: "solid",
      },
    });
  return <Button onClick={handleClick}>Click me!</Button>;
};
