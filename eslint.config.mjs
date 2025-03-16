import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node, ...jestPlugin.environments.globals.globals} }},
  pluginJs.configs.recommended,
];