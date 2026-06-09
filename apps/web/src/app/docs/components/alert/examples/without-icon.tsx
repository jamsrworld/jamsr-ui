"use client";

import { Alert } from "jamsrui/alert";

export const AlertWithoutIcon = (props: Alert.Props) => {
  return (
    <Alert {...props}>
      <Alert.Content>
        This is a notification message without an icon.
      </Alert.Content>
    </Alert>
  );
};
