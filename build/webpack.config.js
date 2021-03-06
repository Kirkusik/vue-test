//https://perishablepress.com/basic-webpack-setup/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // used to run local dev server with webpack
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: ['./src/index.ts'],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.(scss)$/,
                use: [
                  {
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                  },
                  {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                  },
                  {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                      plugins: function () {
                        return [
                          require('autoprefixer')
                        ];
                      }
                    }
                  },
                  {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                  }
                ]
              }
        ]
      },
    output: {
        filename: 'toolkit-test.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
        alias: {
            vue: 'vue/dist/vue.js'
        }
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
            template: 'src/index.html'
        }),
        new VueLoaderPlugin()
  ],
};