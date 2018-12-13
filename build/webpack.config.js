//https://perishablepress.com/basic-webpack-setup/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // used to run local dev server with webpack

module.exports = {
    entry: ['./src/index.ts'],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
      },
    output: {
        filename: 'toolkit-test.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    devtool: 'inline-source-map',
    devServer: {
        stats: "errors-only",
        host: process.env.HOST, // default: localhost
        port: process.env.PORT, // default: 8080
        open: true, // open page in browser
        overlay: true, // error overlay
      },
    plugins: [      
        new HtmlWebpackPlugin({
        title: "Project Name",
        }),
  ],
};