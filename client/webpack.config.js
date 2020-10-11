const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },
]

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:1234',
        path.resolve(__dirname, './src/index.js')],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },
    module: { rules },
    plugins: [
        // Clean the output folder before putting the new bundle files in it
        new CleanWebpackPlugin(),
        // Create the HTML file that will run the app
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
    ],
    resolve: {
        extensions: [
            '.js',
            '.css'
        ],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@store': path.resolve(__dirname, 'src/store/'),
        }
    }
};

