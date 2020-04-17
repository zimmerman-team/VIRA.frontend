const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');
// const TestID = require('babel-plugin-react-add-test-id/lib');
// const TestID = require('@welldone-software/babel-plugin-add-test-id');
// require.resolve('babel-plugin-named-asset-import')
module.exports = {
  // plugins: [{ plugin: BabelRcPlugin }],
  plugins: [{ plugin: BabelRcPlugin }],
  // presets: ['react-app'],
  // babel: {
  // plugins: [
  // [
  // require.resolve('@welldone-software/babel-plugin-add-test-id'),
  // { attrName: 'data-test-id-example' },
  // ],
  // ],
  // },
};
