"use client";

import { Button } from "jamsrui/button";
import { useState } from "react";

export const ButtonLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const toggleLoading = () => setIsLoading((prev) => !prev);
  return (
    <div>
      <div className="flex flex-row gap-4">
        <Button
          isLoading={isLoading}
          color="danger"
        >
          Danger
        </Button>
        <Button
          isLoading={isLoading}
          color="success"
        >
          Success
        </Button>
        <Button
          isLoading={isLoading}
          color="warning"
        >
          Warning
        </Button>
        <Button
          color="secondary"
          isLoading={isLoading}
        >
          Saving...
        </Button>
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <Button onClick={toggleLoading}>Toggle loading</Button>
      </div>
    </div>
  );
};
