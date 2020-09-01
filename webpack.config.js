const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/pages/index.html',
  title: 'Read Robin',
  filename: 'index.html',
});

const terserPlugin = new TerserPlugin({
  extractComments: true,
  parallel: true,
});

module.exports = (env) => {
  const common = {
    mode: env.production ? 'production' : 'development',
    entry: {
      source: './src/index.tsx',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    resolve: {
      alias: {
        config: path.resolve(__dirname, 'config/config'),
      },
      extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, 'babel.config.js'),
            },
          },
        },
      ],
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
  };

  const production = {
    optimization: {
      minimize: true,
      minimizer: [terserPlugin],
    },
  };

  const development = {
    devtool: 'inline-source-map',
    devServer: {
      compress: true,
      noInfo: true,
      open: true,
      port: 9000,
    },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
    },
  };

  return {
    ...common,
    ...(env.production ? production : development),
  };
};
