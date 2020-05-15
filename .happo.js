const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,

  targets: {
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1440x1024',
    }),
  },

  pages: [{ url: 'https:/app.ins.test.nyuki.io/', title: 'sign in' }],
};
