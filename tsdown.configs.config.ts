import type { UserConfig } from "tsdown";

const config: UserConfig = {
  clean: true,
  deps: {
    neverBundle: ["typescript", "zod"],
  },
  dts: true,
  entry: ["configs/alex-c-line/index.ts"],
  fixedExtension: false,
  format: ["esm"],
  outDir: "configs-build",
};

export default config;
