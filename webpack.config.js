const HtmlWebPack = require("html-webpack-plugin"),
      MiniCssExtract = require("mini-css-extract-plugin"),
      CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: "development",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
          minimize: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/,
        use: [
          MiniCssExtract.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebPack({
      template: "./src/index.html",
      filename: "./index.html",
      inject: "body",
    }),
    new MiniCssExtract({
      filename: '[name].css',
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/", to: "assets/" },
      ]
    }),
  ]
};
