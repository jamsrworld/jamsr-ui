import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  minify: true,
  format: ["esm"],
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  dts: true,
  
});
