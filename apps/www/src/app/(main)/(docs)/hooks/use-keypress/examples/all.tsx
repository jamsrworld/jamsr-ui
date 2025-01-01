"use client";

import { useKeyPress } from "@jamsr-ui/hooks";
import { Text } from "@jamsr-ui/react";
import { useState } from "react";

export const UseKeypressAll = () => {
  const [pressedKey, setPressedKey] = useState("");
  useKeyPress(null, (e) => {
    setPressedKey(e.key);
  });
  return (
    <div className="flex flex-col items-start gap-2">
      <Text as="p">Start pressing a key</Text>
      <div className="flex gap-2">
        You Pressed <strong>{pressedKey}</strong>
      </div>
    </div>
  );
};
