// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-audit/commands';
import '@testing-library/cypress/add-commands';
import { configure } from '@testing-library/cypress';

configure({ testIdAttribute: 'data-cy' });

Cypress.Commands.add('auth', (overrides = {}) => {
  cy.viewport(1440, 821);
  cy.visit('/login');

  cy.findByTestId('login-email').type(Cypress.env('username'));
  cy.findByTestId('login-password').type(Cypress.env('password'));
  cy.findByTestId('login-button').click();

  cy.wait(5000);
});

Cypress.Commands.add('viztabs', (overrides = {}) => {
  cy.findByTestId('viz-tabs-title').should('exist');
  // check tabs
  cy.findByTestId('prio-tab').should('exist');
  cy.findByTestId('sdg-tab').should('exist');
  cy.findByTestId('map-tab').should('exist');
  // check panels
  cy.findByTestId('prio-panel').should('exist');
  cy.findByTestId('sdg-panel').should('exist');
  cy.findByTestId('map-panel').should('exist');
});

Cypress.Commands.add('listTabs', (overrides = {}) => {
  // check tabs
  cy.findByTestId('projects-tab').should('exist');
  cy.findByTestId('grantees-tab').should('exist');
  cy.findByTestId('reports-tab').should('exist');
  // check lists
  cy.findByTestId('projects-panel').should('exist');
  cy.findByTestId('grantees-panel').should('exist');
  cy.findByTestId('reports-panel').should('exist');
});

Cypress.Commands.add('listTabsNoGrantees', (overrides = {}) => {
  // check tabs
  cy.findByTestId('projects-tab').should('exist');
  // cy.findByTestId('grantees-tab').should('exist');
  cy.findByTestId('reports-tab').should('exist');
  // check lists
  cy.findByTestId('projects-panel').should('exist');
  // cy.findByTestId('grantees-panel').should('exist');
  cy.findByTestId('reports-panel').should('exist');
});

Cypress.Commands.add('listTabsNoReports', (overrides = {}) => {
  // check tabs
  cy.findByTestId('projects-tab').should('exist');
  cy.findByTestId('grantees-tab').should('exist');
  // cy.findByTestId('reports-tab').should('exist');
  // check lists
  cy.findByTestId('projects-panel').should('exist');
  cy.findByTestId('grantees-panel').should('exist');
  // cy.findByTestId('reports-panel').should('exist');
});
