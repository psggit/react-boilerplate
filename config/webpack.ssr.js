const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: {
        index: './src/server/index.js'
    },
    output: {
        path: path.resolve(__dirname, '..' ,'views/server'),
        filename: "[name].js",  
        libraryTarget: "commonjs" //used to load the views/server/index.js using require in express(index.js)
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                // query: {
                //     presets: ['es2015', 'react', 'stage-0']
                // }
            },
            { test: /\.css$/, loader: 'ignore-loader'}
        ]
    }
};