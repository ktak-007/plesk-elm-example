// Copyright 1999-2019. Plesk International GmbH. All rights reserved.

const path = require('path');
const context = path.resolve(__dirname, 'src/frontend');

module.exports = {
    context,
    mode: 'development',

    entry: {
        app: [
            './main.js'
        ]
    },

    output: {
        path: path.resolve(__dirname + '/src/htdocs/js'),
        filename: 'main.js',
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test:    /\.html$/,
                exclude: /node_modules/,
                loader:  'file-loader?name=[name].[ext]',
            },
            {
                test:    /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                loader:  'elm-webpack-loader?verbose=true',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
        ],

        noParse: /\.elm$/,
    },

    devServer: {
        inline: true,
        stats: { colors: true },
    },
};
