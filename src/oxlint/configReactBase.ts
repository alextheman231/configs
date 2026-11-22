import type { OxlintConfig } from "oxlint";

import type { OxlintConfigBaseOptions } from "src/oxlint/configBase";

import { assertNotUndefined } from "@alextheman/utility";

import oxlintConfigBase from "src/oxlint/configBase";

function oxlintConfigReactBase(options?: OxlintConfigBaseOptions): OxlintConfig {
  const baseConfig = oxlintConfigBase(options);
  assertNotUndefined(baseConfig.plugins);

  return {
    extends: [baseConfig],
    plugins: [...baseConfig.plugins, "react", "jsx-a11y"],
    rules: {
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/react-in-jsx-scope": "off",
    },
  };
}

export default oxlintConfigReactBase;
