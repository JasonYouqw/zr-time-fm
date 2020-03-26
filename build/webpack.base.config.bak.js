const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'app': './src/index.js'
    },
    output: {
        filename: './dist/[name].[chunkhash:8].js'
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
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            },
            {
                test: /\.css$/,loader: "style-loader!css-loader"
            },
            {
                test: /\.(eot|woff|woff2|ttf)/,
                loader: "url-loader?limit=30000&name=fonts/[hash:8].[name].[ext]"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, //
                loader: 'url-loader',
                options: {
                  limit: 10000,
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
