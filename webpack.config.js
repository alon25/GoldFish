const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.NODE_ENV,
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          // Compiles Sass to CSS
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    publicPath: '/build',
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
