import type { NoRestrictedImportsOptions } from "src/utility/NoRestrictedImportsOptions";

const baseRestrictedImports: NoRestrictedImportsOptions = {
  patterns: [
    {
      group: ["node_modules"],
      message: "Do not import directly from node_modules.",
    },
  ],
};

export default baseRestrictedImports;
