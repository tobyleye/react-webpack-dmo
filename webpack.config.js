const path = require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, "./src/react-root.js"),
  plugins:[
      new HtmlWebpackPlugin({
          title: 'My Awesome app'
      })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
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
    filename: "bundle.js",
    clean:ture,
  },
  devServer: {
    hot: true,
    static: path.resolve(__dirname, "./dist"),
  },
};
