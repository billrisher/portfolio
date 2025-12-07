module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Accessibility rules
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/tabindex-no-positive": "error",

    // Disable some TypeScript rules that might be too strict
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "warn", // Warn instead of error

    // React rules
    "react/react-in-jsx-scope": "off", // Not needed in Gatsby
    "react/prop-types": "off", // Using TypeScript for props
    "react/no-unescaped-entities": "off", // Allow apostrophes in text
  },
};
