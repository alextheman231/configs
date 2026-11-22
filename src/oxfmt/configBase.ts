import type { OxfmtConfig } from "oxfmt";
import sortImports from "src/oxfmt/sortImports";

const config: OxfmtConfig = {
  ignorePatterns: ["dist/**", "pnpm-lock.yaml"],
  sortImports,
  sortPackageJson: {
    sortScripts: true,
  },
};

export default config;
