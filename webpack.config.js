const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx'], // 后缀名自动补全
    alias: {
      '@': path.join(__dirname, './src/components') // 配置@目录
    }
  },
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  target: "web",
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        // 排除 node_modules 和 bower_components 下的文件
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  useBuiltIns: "usage",
                  corejs: { version: 3 },
                  // modules: 'commonjs',
                  // modules: false,
                  targets: {
                    chrome: 60,
                    firefox: 50,
                    ie: 11
                  }
                }
              ],
            ]
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    })
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    compress: true, // 开启 Gzip压缩
    port: 9143,
    // open: true
  }
};