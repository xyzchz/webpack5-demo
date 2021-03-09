const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx'], // 后缀名自动补全
    alias: {
      '@': path.join(__dirname, './src') // 配置@目录
    }
  },
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
    })
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    // contentBase: false,
    compress: true, // 开启 Gzip压缩
    port: 9143,
    hot: true,
    open: true
  }
};