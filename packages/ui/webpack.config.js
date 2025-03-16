const path = require('path');
const webpack = require('webpack');

// 通用配置
const commonConfig = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // 处理服务器端渲染问题
    new webpack.DefinePlugin({
      'typeof window': JSON.stringify('object'),
    }),
    // 提供全局对象的 polyfill，解决 SSR 问题
    new webpack.ProvidePlugin({
      self: require.resolve('./src/utils/self-polyfill.js'),
    }),
  ],
};

// CommonJS 构建
const cjsConfig = {
  ...commonConfig,
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    globalObject: 'this',
    clean: true,
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};

// UMD 构建 (用于 CDN 和直接在浏览器中使用)
const umdConfig = {
  ...commonConfig,
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.umd.js',
    library: {
      name: 'SharedLibsUI',
      type: 'umd',
    },
    globalObject: 'this',
    clean: false,
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
};

// 手动创建 ESM 版本
// 我们将使用 tsc 直接生成 ESM 版本，而不是使用 webpack
// 这将在 package.json 的构建脚本中处理

module.exports = [cjsConfig, umdConfig];
