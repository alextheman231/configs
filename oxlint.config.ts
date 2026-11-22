import { oxlintConfigBase } from "./dist/oxlint/index.js";

export default oxlintConfigBase({
  denyRelativeImportsInFiles: "{src,tests,configs}/**/*.ts",
  sortObjectKeysInFiles: "**/*.ts",
});
