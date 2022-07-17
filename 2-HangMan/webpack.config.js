const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hangman",
      filename: "index.html",
      template: "./src/index.html",
    }),
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /.(sa|sc|c)ss$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",

            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    open: true,
    host: "localhost",
  },
};
