const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
};
