module.exports = {
    'extends': '@3fs/eslint-config/configs/esnext',
    'parser': 'typescript-eslint-parser',
    'plugins': [
        'typescript'
    ],
    'rules': {
        'typescript/type-annotation-spacing': 'error',
        'typescript/explicit-member-accessibility': 'off',
        'typescript/interface-name-prefix': ['error', 'never'],
        'typescript/no-triple-slash-reference': 'error',
        'typescript/no-explicit-any': 'off',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/no-namespace': 'off',
        'typescript/prefer-namespace-keyword': 'error'
    }
};
