const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
];

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    output: {
        publicPath: '/',
    }
});