import type { OxfmtConfig } from "oxfmt";

import sortImports from "src/oxfmt/sortImports";

interface OxfmtConfigBaseOptions {
  ignore?: string | Array<string>;
}

function oxfmtConfigBase(options?: OxfmtConfigBaseOptions): OxfmtConfig {
  const { ignore = ["dist/**", "pnpm-lock.yaml"] } = options ?? {};
  return {
    ignorePatterns: typeof ignore === "string" ? [ignore] : ignore,
    sortImports,
    sortPackageJson: {
      sortScripts: true,
    },
  };
}

export default oxfmtConfigBase;
