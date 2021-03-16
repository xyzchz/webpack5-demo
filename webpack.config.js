const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js'], // 后缀名自动补全
    alias: {
      '@': path.join(__dirname, './src') // 配置@目录
    }
  },
  devtool: 'source-map',
  // devtool: false,
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].async.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: "web",
  mode: 'development',
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        // 排除 node_modules 和 bower_components 下的文件
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: [
        //       '@babel/preset-react',
        //       [
        //         '@babel/preset-env',
        //         {
        //           useBuiltIns: "usage",
        //           corejs: { version: 3 },
        //           // modules: 'commonjs',
        //           // modules: false,
        //           targets: {
        //             chrome: 60,
        //             firefox: 50,
        //             ie: 11
        //           }
        //         }
        //       ],
        //     ]
        //   }
        // }
      },
      {
        test: /\.jpg|png|gif$/i,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024, // 小于8KB base64处理
          esModule: false,
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:5]",
              },
            }
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:5]",
              },
            }
          }
          ,
          'less-loader'
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 3213
    }),
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    // contentBase: false,
    compress: true, // 开启 Gzip压缩
    port: 9143,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "async",
      minSize: 30000, // 模块的最小体积
      minChunks: 1, // 模块的最小被引用次数
      maxAsyncRequests: 5, // 按需加载的最大并行请求数
      maxInitialRequests: 3, // 一个入口最大并行请求数
      automaticNameDelimiter: '~', // 文件名的连接符
      cacheGroups: { // 缓存组
        common: {
          chunks: 'initial',
          name: 'common', // 打包后的文件名
          minSize: 0,
          minChunks: 2 // 重复2次才能打包到此模块
        },
        vendor: {
          priority: 1, // 优先级配置，优先匹配优先级更高的规则，不设置的规则优先级默认为0
          test: /node_modules/, // 匹配对应文件
          chunks: 'initial',
          name: 'vendor',
          minSize: 0,
          minChunks: 1
        }
      }
    }
  }
};