

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
            presets: ['es2015']
          }
        }
      ]
    }
}
