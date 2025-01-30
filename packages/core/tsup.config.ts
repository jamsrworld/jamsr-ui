import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  minify: true,
  format: ["esm"],
  clean: true,
  dts: true,
  splitting: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
