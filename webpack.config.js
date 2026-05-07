const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const WebpackObfuscator = require("webpack-obfuscator");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },

  plugins: [
    new WebpackObfuscator(
      {
        rotateStringArray: true
      },
      []
    )
  ]
};
