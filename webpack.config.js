const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: '/client/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/build/',
      filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
      proxy: {
        '/api': 'http://localhost:3000',
      },
      static: {
        directory: path.join(__dirname, '/client')
      }
    },
    mode: "development",
    module: {
        rules:[
          {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use:{
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
            //   // Creates `style` nodes from JS strings
              "style-loader",
            //   // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          }
        ]
      }
}