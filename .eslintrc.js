module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".ts"] }],
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
};
