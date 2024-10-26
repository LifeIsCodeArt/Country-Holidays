require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:tailwindcss/recommended"
  ],
  rules: {
    "vue/no-reserved-component-names": 0,
    semi: 2,
    "eol-last": ["error", "always"],
    quoutes: 0,
    "max-len": ["off", { "code": 120 }],
    "tailwindcss/no-custom-classname": ["off"]
  },
  parserOptions: {
    ecmaVersion: "latest"
  }
};
