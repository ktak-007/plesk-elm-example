// Copyright 1999-2019. Plesk International GmbH. All rights reserved.

const path = require('path');
//const webpack = require('webpack');
const baseConfig = require('./base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const context = path.resolve(__dirname, '../src/frontend');
const outputPath = path.resolve(__dirname, '../src/htdocs');

const config = env => {
    // const isProduction = env.production === true;
    const config = Object.assign(baseConfig({ env }), {
        entry: './Main.elm',
        output: {
            filename: 'js/main.js',
            path: outputPath,
            //libraryTarget: 'amd',
        },
        context,
        // watch: !isProduction,
    });

    // config.plugins.push(new webpack.EnvironmentPlugin({
    //     NODE_ENV: isProduction ? 'production' : 'development',
    // }));

    const extractTextPlugin = new ExtractTextPlugin(`css/[name].css`);
    config.module.rules = config.module.rules.map(rule => {
        if (String(rule.test) === '/\\.less$/') {
            return {
                ...rule,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: rule.use.slice(1),
                }),
            };
        }

        return rule;
    });

    config.plugins.unshift(extractTextPlugin);

    // if (isProduction) {
    //     config.plugins.push(new UglifyJsPlugin({
    //         sourceMap: true,
    //     }));
    // }

    return config;
};

module.exports = config;
