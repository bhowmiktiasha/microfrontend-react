// micro-frontend-1/webpack.config.js (same for micro-frontend-2 and host-app)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  devServer: {
    port: 3002, // For micro-frontend-1, change for others accordingly
  },
  entry: './src/index.js',
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing JS and JSX files without specifying extensions
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microFrontend1',
      filename: 'remoteEntry.js',
      exposes: {
        './Component1': './src/Component1', // Exposing the component
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
