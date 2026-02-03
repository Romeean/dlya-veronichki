import type { Config } from "prettier";

const config: Config = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],

  printWidth: 100,
  tabSize: 2,
  importOrder: ["^@react/(.*)$", "^@components/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
