"use client";

import { Alert } from "jamsrui/alert";

export const AlertUsage = (props: Alert.Props) => {
  return (
    <Alert
      status="success"
      {...props}
    >
      <Alert.Icon />
      <Alert.Content>
        Here is a gentle confirmation that your action was successful.
      </Alert.Content>
    </Alert>
  );
};
