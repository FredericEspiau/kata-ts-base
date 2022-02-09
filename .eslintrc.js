module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "jest", "node"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:node/recommended-module",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  env: {
    commonjs: true,
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    node: {
      resolvePaths: ["node_modules/@types"],
      tryExtensions: [".cjs", ".d.ts", ".mjs", ".node", ".js", ".json", ".ts"],
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    eqeqeq: ["error", "smart"],
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
    "import/prefer-default-export": "off",
    "jest/consistent-test-it": "off",
    "jest/prefer-expect-assertions": [
      "error",
      { onlyFunctionsWithAsyncKeyword: true },
    ],
    "no-eq-null": "off",
    "no-void": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
    "unicorn/no-null": "off",
  },
};
