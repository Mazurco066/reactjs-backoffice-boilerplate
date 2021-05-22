// Plugins
const CracoLessPlugin = require('craco-less');

// CRA - Config Overwrite Webpack
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {  },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};