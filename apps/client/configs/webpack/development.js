const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    port: 1234,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  devtool: 'cheap-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin({})],
};
