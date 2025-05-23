import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  minify: true,
  format: ["esm", "cjs"],
  clean: true,
  splitting: true,
  dts: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
