var path = require("path");

var Html = require('html-webpack-plugin');

module.exports = {
    entry: ["whatwg-fetch", "./js/main.jsx"],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build")
    },
    mode: "development",
    //watch: true,
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        ["env", {
                            targets: {
                                browsers: [
                                    '> 1%',
                                    'last 2 versions'
                                ]
                            }
                        }],
                        "stage-2",
                        "react"
                    ]
                }
            }
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                new require('autoprefixer')({
                                    browsers: [
                                        'ie 11'
                                    ]
                                })
                            ]
                        }
                    },
                    'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'fonts',
                        outputPath: 'fonts'
                    }
                }
            }
        ]
    },
    plugins: [
        new Html({
            filename: 'index.html',
            template: './index.html'
        })
    ]
}