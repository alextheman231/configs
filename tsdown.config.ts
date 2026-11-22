import type { UserConfig } from "tsdown";

const config: Array<UserConfig> = [
  {
    clean: true,
    dts: true,
    entry: ["src/oxfmt/index.ts", "src/oxlint/index.ts"],
    fixedExtension: false,
    format: ["esm", "cjs"],
  },
];

export default config;
