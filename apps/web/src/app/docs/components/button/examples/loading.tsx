"use client";

import { Button } from "ui/button";
import { useState } from "react";

export const ButtonLoading = (props: Button.Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const toggleLoading = () => setIsLoading((prev) => !prev);
  return (
    <div className="flex flex-col gap-4 items-start">
      <Button
        isLoading={isLoading}
        {...props}
      >
        Button
      </Button>
      <Button onClick={toggleLoading}>Toggle loading</Button>
    </div>
  );
};
