/* eslint-env es6 */
const rtlcss = require('rtlcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: [autoprefixer, rtlcss] } } },
          'sass-loader'
        ]
      }
    ]
  }
};
