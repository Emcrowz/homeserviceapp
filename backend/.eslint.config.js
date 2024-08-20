import globals from "globals";
import pluginJs from "@eslint/js";
import { rules } from "../frontend/.eslintrc.cjs";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,

  {
    rules: {
      "no-console": "warn",
    },
  },
];
