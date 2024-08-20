import globals from "globals";
import pluginTs from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.tsx", "**/*.ts"],
    languageOptions: { sourceType: "commonjs" },
  },
  { languageOptions: { globals: globals.node } },
  pluginTs.configs.recommended,
];
