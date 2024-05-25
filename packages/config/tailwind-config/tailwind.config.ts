import { jamsrui } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
export const sharedConfig: Omit<Config, "content"> = {
  plugins: [...jamsrui()],
  theme: {
    extend: {
      borderRadius: {
        inherit: "inherit",
      },
      zIndex: {
        "1": "1",
        "-1": "-1",
        backdrop: "98",
        popover: "99",
        dialog: "99",
        header: "50",
        drawer: "60",
      },
      boxShadow: {
        card: "inset 0 0 90px rgba(255,255,255,.15)",
      },
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
