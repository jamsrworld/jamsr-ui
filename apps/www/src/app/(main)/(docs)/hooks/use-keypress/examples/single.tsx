"use client";

import { useKeyPress } from "@jamsr-ui/hooks";
import { Text } from "@jamsr-ui/react";
import { useState } from "react";

export const UseKeypressSingle = () => {
  const [pressedKey, setPressedKey] = useState("");
  useKeyPress("a", (e) => {
    setPressedKey(e.key);
  });
  return (
    <div className="flex flex-col items-start gap-2">
      <Text as="p">
        Start pressing key <strong>a</strong>
      </Text>
      <div className="flex gap-2">
        You Pressed <strong>{pressedKey}</strong>
      </div>
    </div>
  );
};
