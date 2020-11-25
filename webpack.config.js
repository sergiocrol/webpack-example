const htmlWebpackPlugin = require('html-webpack-plugin');

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }
  }
};

module.exports = {
  output: {
    filename: 'app.[contenthash].js'
  },
  module: {
    rules: [javascriptRules]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}