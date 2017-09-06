const path = require('path');

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
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 8080
    }
};
