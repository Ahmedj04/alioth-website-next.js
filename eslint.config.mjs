import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Original site copy uses plain apostrophes throughout; escaping them
      // to &apos; etc. would mean rewriting the source content for no
      // functional benefit (plain apostrophes render identically).
      "react/no-unescaped-entities": "off",
      // Images are copied from the original static site as-is to guarantee
      // pixel-identical rendering; swapping to next/image is a follow-up
      // optimization, not part of a like-for-like migration.
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
