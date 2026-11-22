import type { OxfmtConfig } from "oxfmt";

import sortImports from "src/oxfmt/sortImports";

const oxfmtConfigBase: OxfmtConfig = {
  ignorePatterns: ["dist/**", "pnpm-lock.yaml"],
  sortImports,
  sortPackageJson: {
    sortScripts: true,
  },
};

export default oxfmtConfigBase;
