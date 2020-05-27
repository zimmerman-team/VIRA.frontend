const { RemoteBrowserTarget } = require('happo.io');
// const happoPluginStorybook = require('happo-plugin-storybook');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  project: 'insinger-frontend',
  targets: {
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1440x1024',
    }),
  },
  // plugins: [
  //   // see https://github.com/happo/happo-plugin-storybook for a list of options you can pass to the plugin
  //   happoPluginStorybook(),
  // ],
};
