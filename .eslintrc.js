module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "hardcore",
    "hardcore/node",
    "hardcore/react",
    "hardcore/jest",
    "hardcore/ts",
    "hardcore/fp",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  env: {
    commonjs: true,
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    node: {
      resolvePaths: ["node_modules/@types"],
      tryExtensions: [".cjs", ".d.ts", ".mjs", ".node", ".js", ".json", ".ts"],
    },
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "id-length": "off",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/no-default-export": "error",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "jest/consistent-test-it": "off",
    "jest/prefer-expect-assertions": [
      "error",
      { onlyFunctionsWithAsyncKeyword: true },
    ],
    "no-use-before-define": "off",
    "no-void": "off",
    "node/no-extraneous-import": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};
