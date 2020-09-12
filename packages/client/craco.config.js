const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const siblingPackages = ['components', 'pages', 'ui', 'hooks'].map((p) => path.join(__dirname, '../', p));

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
      if (isFound) {
        const include = Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include];
        match.loader.include = [...include, ...siblingPackages];
      }
      return webpackConfig;
    },
  },
  babel: {
    plugins: ['@babel/plugin-proposal-optional-chaining'],
  },
};
