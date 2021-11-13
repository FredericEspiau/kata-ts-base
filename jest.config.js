module.exports = {
  moduleFileExtensions: ["jsx", "js", "json", "ts", "tsx"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  setupFiles: ["<rootDir>config.ts"],
};
