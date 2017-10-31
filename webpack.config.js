const path = require('path');

const electronConfig = {
  entry: {
    index: ['./src/react/index.jsx'],
  },
  target: 'electron',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    __dirname: false,
  },
};

const reactConfig = {
  entry: {
    main: ['./src/electron/main.jsx'],
  },
  target: 'electron',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    __dirname: false,
  },
};

module.exports = [electronConfig, reactConfig];

/* TODO

entry
https://webpack.js.org/configuration/entry-context/#entry

multiple targets
https://webpack.js.org/concepts/targets/#multiple-targets

 */
