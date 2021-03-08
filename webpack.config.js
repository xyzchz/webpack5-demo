const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx'], // 后缀名自动补全
    alias: {
      '@': path.join(__dirname, './src/components') // 配置@目录
    }
  },
  devtool: 'source-map',
  entry: './src/index.html',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // 排除 node_modules 和 bower_components 下的文件
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
              // [
              //   "@babel/preset-react",
              //   [
              //     "@babel/preset-env",
              //     {
              //       // 只引用使用了新特性 polyfill
              //       useBuiltIns: 'usage',
              //       modules: 'commonjs'
              //     }
              //   ]
              // ]
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
};