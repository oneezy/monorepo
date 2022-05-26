module.exports = {
  extends: [
    '@commitlint/config-conventional' // scoped packages are not prefixed
  ],
  rules: {
    "header-max-length": [ 2, "always", 120 ],
    "type-enum": [ 2, "always", [
        "breaking",
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "config",
        "no-release"
      ]
    ]
  },
}