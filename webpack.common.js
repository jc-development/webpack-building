const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'Production'
    }),    
];

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};