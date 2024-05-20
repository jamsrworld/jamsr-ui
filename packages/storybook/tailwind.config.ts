import type { Config } from "tailwindcss";
import sharedConfig from "@jamsrworld/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["../components/**/*.@(js|jsx|mjs|ts|tsx)"],
  presets: [sharedConfig],
};

export default config;
