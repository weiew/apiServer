const webpack = require("webpack");
var path = require('path')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: ["webpack-hot-middleware/client?noInfo=true&reload=true","app.js"],
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ]
}
