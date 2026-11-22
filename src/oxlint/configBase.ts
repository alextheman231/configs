import type { OxlintConfig } from "oxlint";

import baseRestrictedImports from "src/oxlint/restrictedImports/baseRestrictedImports";
import sourceRestrictedImports from "src/oxlint/restrictedImports/sourceRestrictedImports";
import combineRestrictedImports from "src/utility/combineRestrictedImports";

export interface OxlintConfigBaseOptions {
  denyRelativeImportsInFiles?: string | Array<string>;
  sortObjectKeysInFiles?: string | Array<string>;
}

export const oxlintConfigBaseDefaultOptions = {
  denyRelativeImportsInFiles: "{src,tests}/**/*.{ts,tsx}",
  sortObjectKeysInFiles: ["*.config.{js,ts}", "configs/**/*.{ts}"],
} satisfies OxlintConfigBaseOptions;

function oxlintConfigBase(options?: OxlintConfigBaseOptions): OxlintConfig {
  const {
    denyRelativeImportsInFiles = oxlintConfigBaseDefaultOptions.denyRelativeImportsInFiles,
    sortObjectKeysInFiles = oxlintConfigBaseDefaultOptions.sortObjectKeysInFiles,
  } = options ?? {};

  return {
    categories: {
      correctness: "error",
      suspicious: "error",
    },
    ignorePatterns: ["**/dist/**"],
    options: {
      reportUnusedDisableDirectives: "error",
      typeAware: true,
      typeCheck: true,
    },
    overrides: [
      {
        files: ["**/deprecated/**"],
        rules: {
          "typescript/no-deprecated": "off",
        },
      },
      {
        files:
          typeof sortObjectKeysInFiles === "string"
            ? [sortObjectKeysInFiles]
            : sortObjectKeysInFiles,
        rules: {
          "sort-keys": [
            "error",
            "asc",
            {
              natural: true,
            },
          ],
        },
      },
      {
        files:
          typeof denyRelativeImportsInFiles === "string"
            ? [denyRelativeImportsInFiles]
            : denyRelativeImportsInFiles,
        rules: {
          "no-restricted-imports": [
            "error",
            combineRestrictedImports(baseRestrictedImports, sourceRestrictedImports),
          ],
        },
      },
    ],
    plugins: ["eslint", "typescript", "unicorn", "import", "node", "vitest"],
    rules: {
      "arrow-body-style": ["error", "always"],
      "capitalized-comments": "off",
      eqeqeq: "error",
      "func-style": ["error", "declaration"],
      "import/no-named-as-default": "off",
      "import/no-namespace": "error",
      "import/no-unassigned-import": "off",
      "no-console": ["error", { allow: ["warn", "error", "info", "table"] }],
      "no-duplicate-imports": ["error", { allowSeparateTypeImports: true }],
      "no-lonely-if": "error",
      "no-magic-numbers": "off",
      "no-new": "off",
      "no-restricted-imports": ["error", baseRestrictedImports],
      "no-shadow": "off",
      "no-underscore-dangle": "off",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "node/no-sync": "error",
      "object-shorthand": "error",
      "prefer-destructuring": "error",
      "typescript/adjacent-overload-signatures": "off",
      "typescript/array-type": ["error", { default: "generic" }],
      "typescript/ban-ts-comment": [
        "error",
        {
          "ts-check": "allow-with-description",
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": "allow-with-description",
        },
      ],
      "typescript/ban-types": "error",
      "typescript/consistent-type-assertions": ["error", { assertionStyle: "as" }],
      "typescript/consistent-type-definitions": "off",
      "typescript/consistent-type-exports": "error",
      "typescript/consistent-type-imports": ["error", { fixStyle: "separate-type-imports" }],
      "typescript/dot-notation": "error",
      "typescript/no-deprecated": "warn",
      "typescript/no-for-in-array": "off",
      "typescript/no-require-imports": "error",
      "typescript/no-unnecessary-template-expression": "error",
      "typescript/no-unnecessary-type-assertion": "error",
      "typescript/no-unnecessary-type-parameters": "off",
      "typescript/no-unsafe-type-assertion": "off", // I would like to re-enable this at some point, however we do this in a lot of places and a lot of them are hard to avoid. As such, I will disable for now and see if we can avoid type assertions wherever we are currently doing them.
      "typescript/prefer-function-type": "error",
      "typescript/restrict-template-expressions": [
        "error",
        {
          allow: [
            {
              from: "file",
              name: "VersionNumber",
            },
          ],
        },
      ],
      "unicorn/no-instanceof-array": "error",
      "unicorn/no-process-exit": "error",
      "unicorn/no-typeof-undefined": "error",
      "vitest/consistent-each-for": [
        "error",
        {
          describe: "each",
          test: "each",
        },
      ],
      "vitest/consistent-test-it": ["error", { fn: "test" }],
      "vitest/consistent-vitest-vi": ["error", { fn: "vitest" }],
      "vitest/expect-expect": "off",
      "vitest/no-conditional-expect": "off",
      "vitest/no-focused-tests": "error",
      "vitest/no-import-node-test": "error",
      "vitest/no-importing-vitest-globals": "off",
      "vitest/no-test-prefixes": "error",
      "vitest/prefer-describe-function-title": "off",
      "vitest/prefer-importing-vitest-globals": "error",
      "vitest/require-mock-type-parameters": "off",
      "vitest/valid-expect": ["error", { maxArgs: 2 }],
    },
  };
}

export default oxlintConfigBase;
