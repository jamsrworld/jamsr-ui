"use client";

import { Kbd } from "ui/kbd";

export const KbdUsage = (props: Kbd.Props) => {
  const { keys, ...rest } = props;
  return (
    <div className="flex flex-col items-start gap-4">
      <Kbd
        keys={["k"]}
        {...rest}
      >
        K
      </Kbd>
      <div className="flex gap-2 items-center text-sm">
        <Kbd
          keys={["ctrl"]}
          {...rest}
        >
          Ctrl
        </Kbd>
        +
        <Kbd
          keys={["k"]}
          {...rest}
        >
          K
        </Kbd>
      </div>
      <div className="flex gap-2 items-center text-sm">
        <Kbd
          keys={["cmd"]}
          {...rest}
        >
          Cmd
        </Kbd>
        +
        <Kbd
          keys={["k"]}
          {...rest}
        >
          K
        </Kbd>
      </div>
    </div>
  );
};
