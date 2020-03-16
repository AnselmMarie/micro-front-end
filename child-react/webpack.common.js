module.exports = {
  entry: {
    polyfill: [
      './node_modules/@webcomponents/custom-elements/src/native-shim.js',
      './node_modules/@webcomponents/custom-elements/custom-elements.min.js',
    ],
    main: './src/routes/app.route/index.js',
    // vendor: './src/assets/js/vendor.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          }
        ]
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
      {
        test: /\.(svg|png|jp(e?)g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/images',
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/fonts',
          }
        }
      }
    ]
  }
}
