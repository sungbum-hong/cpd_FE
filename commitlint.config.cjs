module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'refactor',
                'style',
                'chore',
                'docs',
                'test',
                'ci',
                'build',
                'revert',
                'docs',
            ],
        ],
        'subject-full-stop': [2, 'never', '.'],
        'subject-case': [0],
    },
};
