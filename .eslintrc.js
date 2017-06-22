// http://eslint.org/docs/user-guide/configuring
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        'import/extensions': ['error', 'always', { js: 'never', vue: 'never' }], // don't require .vue extension when importing
        'import/no-extraneous-dependencies': ['error', { optionalDependencies: ['test/unit/index.js'] }], // allow optionalDependencies
        'indent': ['error', 4], // 4 space indentation
        'global-require': 0, // allow require statements
        'no-unused-vars': isProduction ? 0 : 2, // warn for unused variables
        'no-debugger': isProduction ? 2 : 0 // allow debugger during development
    }
}
