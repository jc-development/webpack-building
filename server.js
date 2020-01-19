const path = require('path');
const express = require('express');

const app = express();


if (process.env.NODE_ENV !== 'production') {

    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');

    const devConfig = require('./webpack.dev');
    const compiler = webpack(devConfig);
    const webpackHotMiddleware = require('webpack-hot-middleware');

    app.use( webpackDevMiddleware(compiler, {
        publicPath: devConfig.output.publicPath,
    }) );
    
    app.use( webpackHotMiddleware(compiler) );
} else {
    app.use('/', express.static('dist'));

    app.get('*', (req, res, next) => {
        res.sendFile(path.join(__dirname, './dist/index.html'));
    });
}

app.listen(3000, function() {
    console.log('Example app listening on port 3000!\n');
})