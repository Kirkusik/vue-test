const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'toolkit-test.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    plugins: [      
        new HtmlWebpackPlugin({
        title: "Project Name",
        }),
  ],
};