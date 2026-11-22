import type { OxfmtConfig } from "oxfmt";

import sortImports from "src/oxfmt/sortImports";

interface OxfmtConfigBaseOptions {
  ignore?: string | Array<string>;
}

export const oxfmtConfigBaseDefaultOptions = {
  ignore: ["dist/**", "pnpm-lock.yaml"],
} satisfies OxfmtConfigBaseOptions;

function oxfmtConfigBase(options?: OxfmtConfigBaseOptions): OxfmtConfig {
  const { ignore = oxfmtConfigBaseDefaultOptions.ignore } = options ?? {};
  return {
    ignorePatterns: typeof ignore === "string" ? [ignore] : ignore,
    sortImports,
    sortPackageJson: {
      sortScripts: true,
    },
  };
}

export default oxfmtConfigBase;
