import { jamsrui } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
export const sharedConfig: Omit<Config, "content"> = {
  plugins: [...jamsrui()],
  theme: {
    extend: {
      fontSize: {
        "size-inherit": "inherit",
      },
      animation: {
        progress: "progress 1s infinite linear",
      },
      keyframes: {
        progress: {
          "0%": {
            transform: "translateX(-50%) scaleX(0.2)",
          },
          "100%": {
            transform: "translateX(100%) scaleX(1)",
          },
        },
      },
    },
  },
};

export type { Config };
