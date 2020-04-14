const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'app': './src/index.tsx'
    },
    output: {
        filename: './[name].js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|woff|woff2|ttf)/,
                use: [
                    {
                        loader: "url-loader?limit=30000&name=fonts/[hash:8].[name].[ext]"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, //
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        }
                    }
                ]
            },
            {
                test:/\.(htm|html)$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': "development",
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(process.cwd(), './index.html'),
            inject: true,
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
