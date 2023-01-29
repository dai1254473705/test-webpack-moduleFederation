const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dist.bundle.js",
  },
  devServer: {
    port: 3001,
    hot: true,
    liveReload:false,
    open:true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./index.html",
    }),
    new ModuleFederationPlugin({
      name: "layout",
      filename: "remoteEntry.js",
      remotes: {
        nav: "header@http://localhost:3003/remoteEntry.js",
      },
      exposes: {},
      shared: {},
    }),
  ],
};
