"use client";

import { EmailIcon } from "@jamsrui/icons";
import { Button } from "jamsrui/button";
import { CircularProgress } from "jamsrui/circular-progress";
import { IconButton } from "jamsrui/icon-button";
import { useState } from "react";

export const IconButtonLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <IconButton
          color="success"
          label="Loading Icon Button"
          isLoading={isLoading}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          label="Loading Icon Button"
          isLoading={isLoading}
        >
          {isLoading ? <CircularProgress /> : <EmailIcon />}
        </IconButton>
      </div>
      <Button onClick={() => setIsLoading(!isLoading)}>Toggle Loading</Button>
    </div>
  );
};
