var path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules'),
        ],
        alias: {
            'src': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, '../src'),
                ],
            },
        ],
    },
};
