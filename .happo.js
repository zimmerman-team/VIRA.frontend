const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  project: 'insinger-frontend',
  targets: {
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1440x1024',
    }),

    'ios-safari': new RemoteBrowserTarget('ios-safari', {
      viewport: '414x736',
    }),
  },
};
