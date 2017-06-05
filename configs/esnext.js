module.exports = {
    'extends': '3fs',
    'parserOptions': {
        'ecmaVersion': 8,
        'ecmaFeatures': { 'experimentalObjectRestSpread': true },
        'sourceType': 'module'
    },
    'env': { 'es6': true },
    'rules': {
        'no-var': 'error',
        'prefer-const': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'no-invalid-this': 'error'
    }
};
