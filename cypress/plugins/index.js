/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

// const pickle = require('picklejs/cypress/plugin');

// module.exports = pickle;
// const cucumber = require('cypress-cucumber-preprocessor').default;
// const {
//   addMatchImageSnapshotPlugin,
// } = require('cypress-image-snapshot/plugin');

// const dill = require('dill');

// module.exports = (on, config) => {
//   addMatchImageSnapshotPlugin(on);
//   on('file:preprocessor', cucumber());
//   dill();
// };

const dotenv = require('./node_modules/dotenv-extended');
const getenv = require('./node_modules/getenv');

dotenv.config({ path: '.env' });
dotenv.load();

const happoTask = require('./node_modules/happo-cypress/task');

const overrideEnvVars = config => {
  const baseUrl = getenv.string('REACT_APP_CYPRESS_baseUrl', '');
  const username = getenv.string('REACT_APP_CYPRESS_USER', '');
  const password = getenv.string('REACT_APP_CYPRESS_PASS', '');
  if (baseUrl !== '') config.baseUrl = baseUrl;
  if (username !== '') config.env.username = username;
  if (password !== '') config.env.password = password;
  return config;
};

module.exports = (on, config) => {
  on('task', happoTask);
  return overrideEnvVars(config);
};
