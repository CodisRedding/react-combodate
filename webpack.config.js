var webpack = require('webpack');

module.exports = {
  entry: [
    './src/combodate'
  ],
  devtool: 'eval',
  output: {
    path: __dirname,
    filename: 'combodate.js',
    publicPath: '/src/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      moment: 'moment'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'react-hot!babel',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
