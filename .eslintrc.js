module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "jest", "unicorn", "jsx-a11y"],
    extends: [
      "airbnb-typescript",
      "airbnb/hooks",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:jest/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier",
    ],
    rules: {
      "react/react-in-jsx-scope": 0,
      "import/prefer-default-export": 0,
      "react/jsx-props-no-spreading": 0,
      "import/extensions": 0,
      "import/no-unresolved": 0,
      "import/order": [
        "error",
        { alphabetize: { order: "asc", caseInsensitive: true } },
      ],
    },
  };
