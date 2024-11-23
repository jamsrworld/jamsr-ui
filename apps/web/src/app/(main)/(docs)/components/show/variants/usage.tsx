"use client";

import { Button, Show } from "@jamsr-ui/react";
import { useState } from "react";

export const ShowUsage = () => {
  const [count, setCount] = useState(0);
  return (
    <Show
      when={count > 2}
      fallback={
        <Button onClick={() => setCount(count + 1)}>
          Click {3 - count} times to unlock your gift
        </Button>
      }
    >
      Hey There, here is your gift
    </Show>
  );
};
