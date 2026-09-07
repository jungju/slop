export default [
  {
    ignores: [
      "_site/**",
      "output/**",
      ".codex/**",
      ".playwright-cli/**",
      "src/posthog.js",
    ],
  },
  {
    files: ["scripts/**/*.mjs", "src/*.js", "eslint.config.mjs"],
    languageOptions: {
      globals: {
        process: "readonly",
        Buffer: "readonly",
        URL: "readonly",
        document: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-constant-condition": "error",
      "no-duplicate-imports": "error",
      "no-dupe-keys": "error",
      "no-dupe-args": "error",
      "valid-typeof": "error",
      eqeqeq: "error",
    },
  },
];
