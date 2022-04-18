const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: path.resolve(__dirname, "./src/react-root.js"),
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Awesome app",
    }),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [isDev && require.resolve("react-refresh/babel")].filter(
                Boolean
              ),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]-[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "cool.js",
    clean: true,
    library: {
      name: "cool",
      type: "umd",
    },
  },
  devServer: {
    hot: true,
    static: path.resolve(__dirname, "./dist"),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
