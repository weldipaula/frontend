const path = require('path');

module.exports = {
  /*arquivo que sera convertido*/
  entry: path.resolve(__dirname, 'src', 'index.js'),
  /**arquivo convertido */
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    /* regras */
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          //insere o codigo interpretado
          { loader: 'style-loader' },
          //interpreta o codigo
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          //carrega arquivos para dentro da aplicação
          loader: 'file-loader',
        }
      }
    ]
  },
};