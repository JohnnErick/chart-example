const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
				},
				resolve: {
					extensions: ['.js', '.jsx'],
					alias: {
						actions: path.resolve(__dirname, 'src/actions'),
						components: path.resolve(__dirname, 'src/components'),
						reducers: path.resolve(__dirname, 'src/reducers'),
						settings: path.resolve(__dirname, 'src/settings'),
						selectors: path.resolve(__dirname, 'src/selectors')
					}
				}
      }
    ]
	},
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
