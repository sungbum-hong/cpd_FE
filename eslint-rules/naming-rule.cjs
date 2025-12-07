module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: '변수/함수/상수/컴포넌트 네이밍 규칙 검사',
        },
        messages: {
            invalidName:
                '변수/함수명은 camelCase, 상수명은 UPPER_CASE, 컴포넌트/클래스는 PascalCase를 사용해주세요.',
        },
        schema: [],
    },

    create(context) {
        return {
            Identifier(node) {
                const name = node.name;

                const isCamelCase = /^[a-z][a-zA-Z0-9]*$/.test(name); // userName, getUserId
                const isUpperCase = /^[A-Z][A-Z0-9_]*$/.test(name); // COLOR_DARK, API_URL
                const isPascalCase = /^[A-Z][a-zA-Z0-9]*$/.test(name); // App, UserCard, TestError

                if (isCamelCase || isUpperCase || isPascalCase) return;

                // 규칙 어기면 여기서 한글 메세지로 에러
                context.report({ node, messageId: 'invalidName' });
            },
        };
    },
};
