'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/pages/home/client.js",
    output: {
        path: __dirname,
        filename: "static/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko'],
        modules: ['./', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                  fallbackLoader: "style-loader",
                  loader: [
                    {
                      loader: "css-loader",
                      query: {
                        sourceMap: true,
                      }
                    },
                    {
                      loader: "less-loader"
                    }
                  ]
                })
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            }
        ]
    },
    plugins: [
            // Avoid publishing files when compilation failed:
            new webpack.NoErrorsPlugin(),

            // Write out CSS bundle to its own file:
            new ExtractTextPlugin({
              filename: 'static/bundle.css',
              options: { allChunks: true }
            })
    ]
};
