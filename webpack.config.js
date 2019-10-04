const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "eval-source-map",
    output: {
        libraryTarget: "umd",
        umdNamedDefine: true,
        filename: "[name].js",
        path: `${__dirname}/dist/`
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@constants': path.resolve(__dirname, 'src/constants/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@hoc': path.resolve(__dirname, 'src/hoc/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Student List",
            id: "root",
            favicon: `${__dirname}/template/favicon.ico`,
            template: `${__dirname}/template/index.html`
        })
    ],
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
        ]
    }
};