const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'client', 'index.js'),
    ],
    output: {
        path: path.join(__dirname, 'client/dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx*$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?{"presets":["es2015","react"]}']
            }
        ]
    },
    stats: {
        colors: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
}

