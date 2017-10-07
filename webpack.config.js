const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname + '/src/client',
    entry: './app.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: './styles/main.css', to: './styles/main.css'}
      ])
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 8080
    }
};
