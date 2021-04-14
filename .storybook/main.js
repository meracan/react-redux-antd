const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
 stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"

  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push({ test: /\.less$/,use: ['style-loader','css-loader','less-loader']});
    
     config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./src'),
    ];
    

    // Return the altered config
    return config;
  },
};