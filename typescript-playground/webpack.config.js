// webpack.config.js
module.exports = {
  entry: './app.ts',
  output: { filename: 'bundle.js' },
  resolve: {
    extensions: ['', '.ts']
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  }
};
