"use client";

import { Alert } from "ui/alert";

export const AlertWithTitle = (props: Alert.Props) => {
  return (
    <Alert {...props}>
      <Alert.Icon />
      <Alert.Content>
        <Alert.Title>Confirmation</Alert.Title>
        <Alert.Description>
          Your Pro plan has been activated successfully.
        </Alert.Description>
      </Alert.Content>
    </Alert>
  );
};
