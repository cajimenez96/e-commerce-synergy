const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  entry: [path.join(CURRENT_WORKING_DIR, 'app/index.js')],
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
    alias: {
      app: 'app'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: modulePath => {
          // Transpile our app code always
          if (!/node_modules/.test(modulePath)) return false;
          // Allow specific node_modules packages to be transpiled
          return !/node_modules\/(i18next|react-i18next|i18next-browser-languagedetector)/.test(modulePath);
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'public'
      }
    ])
  ]
};
