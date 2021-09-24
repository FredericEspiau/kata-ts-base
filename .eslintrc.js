module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "jest", "node"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:node/recommended",
    "prettier",
  ],
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    node: {
      resolvePaths: ["node_modules/@types"],
      tryExtensions: [
        ".cjs",
        ".d.ts",
        ".mjs",
        ".node",
        ".js",
        ".json",
        ".ts",
      ],
    },
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      { alphabetize: { order: "asc", caseInsensitive: true } },
    ],
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "no-void": "off",
    "node/no-extraneous-import": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};
