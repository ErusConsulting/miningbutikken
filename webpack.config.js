module.exports = {
    entry: "./admin/index.js",
    output: {
        path: `${__dirname}/admin`,
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=public/fonts/[name].[ext]'
        }
      ],
    }
};
