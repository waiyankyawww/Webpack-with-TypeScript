const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
