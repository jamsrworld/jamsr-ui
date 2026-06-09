"use client";

import { CloseIcon } from "@jamsrui/icons";
import { Alert } from "jamsrui/alert";
import { IconButton } from "jamsrui/icon-button";
import { useState } from "react";

export const AlertWithAction = (props: Alert.Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  if (!isOpen) return null;
  return (
    <Alert
      status="success"
      {...props}
    >
      <Alert.Icon />
      <Alert.Content>Your Pro plan has been activated.</Alert.Content>
      <IconButton
        label="Close"
        onClick={handleClose}
        radius="full"
        variant="light"
        size="sm"
        className="self-center"
      >
        <CloseIcon className="size-5" />
      </IconButton>
    </Alert>
  );
};
