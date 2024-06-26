import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    watch: false,
    include: ["../components/*/__tests__/*.{test,spec}.?(c|m)[jt]s?(x)"],
  },
});
