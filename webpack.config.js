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
            presets: ['@babel/react']
          }
        }
      ]
    },
    plugins: [
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 8080
    }
};
