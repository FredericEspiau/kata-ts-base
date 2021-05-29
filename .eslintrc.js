module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "jest", "unicorn"],
    extends: [
      "airbnb-typescript",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:jest/recommended",
      "plugin:unicorn/recommended",
      "prettier",
    ],
  };
