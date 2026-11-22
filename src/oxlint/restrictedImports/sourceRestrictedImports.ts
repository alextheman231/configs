const sourceRestrictedImports = {
  patterns: [
    {
      message:
        "Relative imports are not allowed. Please use imports relative to the project root instead.",
      regex: String.raw`^\.(\/[^\/ ]*)+\/?$|^\.\.\/([^\/ ]*\/)*[^\/ ]*$`,
    },
  ],
};

export default sourceRestrictedImports;
