const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
module.exports = merge(common, {
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000,
    historyApiFallback: true,
  },
});
