// TODO: Use the built version of the package with the static typing once tsgo supports building JSON files (see https://github.com/oxc-project/oxc/issues/19300)
const alexCLineConfig = {
  preCommit: {
    packageManager: "pnpm",
    steps: ["build", "format", "lint"],
  },
};

export default alexCLineConfig;
