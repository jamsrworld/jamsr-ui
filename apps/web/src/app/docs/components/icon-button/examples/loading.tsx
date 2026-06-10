"use client";

import { EmailIcon } from "@/icons";
import { Button } from "ui/button";
import { IconButton } from "ui/icon-button";
import { useState } from "react";

export const IconButtonLoading = (props: IconButton.Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { label = "Loading Icon Button", ...rest } = props;
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row gap-4">
        <IconButton
          label={label}
          isLoading={isLoading}
          {...rest}
        >
          <EmailIcon />
        </IconButton>
      </div>
      <Button onClick={() => setIsLoading(!isLoading)}>Toggle Loading</Button>
    </div>
  );
};
