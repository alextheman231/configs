import type { OxlintConfig } from "oxlint";

import { oxlintConfigBase } from "./dist/oxlint/index.js";

const config: OxlintConfig = {
  extends: [oxlintConfigBase],
  rules: {
    "sort-keys": [
      "error",
      "asc",
      {
        natural: true,
      },
    ],
  },
};

export default config;
