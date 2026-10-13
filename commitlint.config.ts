import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

// Allowed commit prefixes: `type(scope): subject`.
const types = [
  "feat", // a new feature
  "fix", // a bug fix
  "docs", // documentation only
  "style", // formatting, no change in code meaning
  "refactor", // code change that neither fixes a bug nor adds a feature
  "perf", // performance improvement
  "test", // adding or correcting tests
  "build", // build system or dependencies
  "ci", // CI configuration and scripts
  "chore", // maintenance that touches neither src nor tests
  "revert", // reverts a previous commit
];

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Header: `type(scope)!: subject`, short enough for `git log --oneline` and GitHub's UI.
    "type-enum": [RuleConfigSeverity.Error, "always", types],
    "header-max-length": [RuleConfigSeverity.Error, "always", 72],
    "scope-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "subject-min-length": [RuleConfigSeverity.Error, "always", 3],

    // Body and footer must be separated from what precedes them by a blank line.
    "body-leading-blank": [RuleConfigSeverity.Error, "always"],
    "footer-leading-blank": [RuleConfigSeverity.Error, "always"],

    // A breaking change needs both the `!` in the header and a `BREAKING CHANGE:` footer.
    "breaking-change-exclamation-mark": [RuleConfigSeverity.Error, "always"],

    // Links and stack traces routinely exceed any sensible limit, so only warn.
    "body-max-line-length": [RuleConfigSeverity.Warning, "always", 100],
    "footer-max-line-length": [RuleConfigSeverity.Warning, "always", 100],
  },
  // Merge, revert, fixup/squash and version commits are already skipped by the default ignores.
  defaultIgnores: true,
  ignores: [
    // Dependabot writes its own subjects and long changelog bodies.
    (message) => /^Signed-off-by: dependabot\[bot\] <support@github\.com>$/m.test(message),
  ],
  helpUrl: "https://www.conventionalcommits.org/en/v1.0.0/#summary",
};

export default config;
