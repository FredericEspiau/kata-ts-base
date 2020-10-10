module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "jest"],
    extends: [
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "prettier",
      "prettier/@typescript-eslint",
      "plugin:jest/recommended",
    ],
  };
  