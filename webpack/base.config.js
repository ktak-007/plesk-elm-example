// Copyright 1999-2019. Plesk International GmbH. All rights reserved.

module.exports = (vars = {}) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: {
                                normalizeUnicode: false,
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: Object.assign({
                                'cls-prefix': 'advisor-wrapper',
                            }, vars),
                        },
                    },
                ],
            },
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                use: {
                    loader: 'elm-webpack-loader',
                    options: {}
                }
            },
        ],
    },
    externals: {
        '@plesk/ui-library': { amd: 'plesk-ui-library' },
    },
    plugins: []
});
