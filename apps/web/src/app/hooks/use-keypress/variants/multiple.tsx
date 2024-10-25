"use client";

import { useKeyPress } from "@jamsr-ui/hooks";
import { Typography } from "@jamsr-ui/react";
import { useState } from "react";

export const UseKeypressMultiple = () => {
  const [pressedKey, setPressedKey] = useState("");
  useKeyPress(["a", "b"], (e) => {
    setPressedKey(e.key);
  });
  return (
    <div className="flex flex-col items-start gap-2">
      <Typography as="p">
        Start pressing key <strong>a</strong> or <strong>b</strong>
      </Typography>
      <div className="flex gap-2">
        You Pressed <strong>{pressedKey}</strong>
      </div>
    </div>
  );
};
