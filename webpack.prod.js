const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
];

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins,
    module: {
        rules: [
            {
             test: /\.css$/,
             use: [
                 MiniCssExtractPlugin.loader,
                 'css-loader'
                ],   
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [ 
            new TerserPlugin({}),
            new OptimizeCssAssetsPlugin({}),
         ],
    }
});