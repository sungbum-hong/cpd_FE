module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            ["feat", "fix", "refactor", "style", "chore", "docs", "test", "ci", "build", "revert"],
        ],
        "subject-full-stop": [2, "never", "."],
        "subject-case": [0], // subject 한글쓸거라 케이스 제한 X
    },
};
