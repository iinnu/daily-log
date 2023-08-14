const path = require('path');
const dotenv = require('dotenv');

const { ProvidePlugin, EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env =
  process.env.NODE_ENV === 'development' ? '.env' : '.env.production.local';

dotenv.config({
  path: path.resolve(__dirname, env),
});

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.jsx'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ProvidePlugin({
      React: 'react',
    }),
    new EnvironmentPlugin([]),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};
