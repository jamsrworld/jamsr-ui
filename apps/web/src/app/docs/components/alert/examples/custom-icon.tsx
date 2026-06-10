"use client";

import { Alert } from "ui/alert";
import { EmailIcon } from "@/icons";

export const AlertCustomIcon = (props: Alert.Props) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Alert
        status="warning"
        {...props}
      >
        <Alert.Icon>
          <EmailIcon />
        </Alert.Icon>
        <Alert.Content>This is a warning message.</Alert.Content>
      </Alert>
    </div>
  );
};
