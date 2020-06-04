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
import 'happo-cypress';
// import 'cypress-audit/commands';
import '@testing-library/cypress/add-commands';
import { configure } from '@testing-library/cypress';

configure({ testIdAttribute: 'data-cy' });
// =================== GENERAL =========================
Cypress.Commands.add('auth', (overrides = {}) => {
  cy.viewport(1440, 821);
  cy.visit('/login');

  cy.findByTestId('login-email').type(Cypress.env('username'));
  cy.findByTestId('login-password').type(Cypress.env('password'));
  cy.findByTestId('login-button').click();

  cy.wait(5000);
});

Cypress.Commands.add('waitPageLoader', (timeout = 50000) => {
  cy.get('[data-cy=general-loader]', { timeout }).should('not.be.visible');
  cy.wait(2000);
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

// =================== MANAGE TEAMS =========================
Cypress.Commands.add('createNewTeam', () => {
  cy.findByTestId('manage-users-teams-add-button').click();
  cy.findByTestId('add-team-input-title').type('Cypress Test Team');
  cy.get('#MUIDataTableBodyRow-0')
    .find("[type='checkbox']")
    .click();
  cy.findByTestId('contained-button').click();
});

Cypress.Commands.add('readTeam', () => {
  cy.visit('/super-admin/manage-teams');
  cy.waitPageLoader();
  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .findByTestId('card-header')
    .should('have.text', 'Cypress Test Team');
});

Cypress.Commands.add('updateTeam', () => {
  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .click();
  cy.waitPageLoader();
  cy.findByTestId('add-team-input-title').type(' Updated');
  cy.findByTestId('contained-button').click();
  cy.visit('/super-admin/manage-teams');
  cy.waitPageLoader();
  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .findByTestId('card-header')
    .should('contain.text', 'Cypress Test Team');
});

Cypress.Commands.add('deleteTeam', () => {
  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .findByTestId('card-delete-button')
    .click();

  cy.findAllByTestId('dialog-action-button')
    .eq(1)
    .click();

  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .findByTestId('card-header')
    .should('not.have.text', 'Cypress Test Team Updated');
});

// =================== MANAGE USERS ======================
Cypress.Commands.add('createNewUser', () => {
  cy.findByTestId('manage-users-teams-add-button').click();
  cy.findByTestId('manage-user-input-first-name').type('00Cypress');
  cy.findByTestId('manage-user-input-last-name').type('Test User');
  cy.findByTestId('manage-user-input-email').type('cypress@testuser.cy');
  cy.get('#select-outlined').click();
  cy.findByTestId('select-item-1').click();
  cy.findByTestId('manage-user-save-button').click();
});

Cypress.Commands.add('readUser', () => {
  cy.visit('/super-admin/manage-users');
  cy.waitPageLoader();
  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .findByTestId('card-header')
    .should('have.text', '00Cypress Test User');
});

Cypress.Commands.add('updateUser', () => {
  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .click();
  cy.waitPageLoader();
  cy.findByTestId('manage-user-input-last-name').type(' Updated');
  cy.findByTestId('manage-user-save-button').click();
  cy.waitPageLoader();
  cy.visit('/super-admin/manage-users');
  cy.waitPageLoader();
  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .findByTestId('card-header')
    .should('contain.text', '00Cypress Test User');
});

Cypress.Commands.add('deleteUser', () => {
  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .findByTestId('card-delete-button')
    .click();
  cy.findAllByTestId('dialog-action-button')
    .eq(1)
    .click();
  cy.waitPageLoader();
  cy.findAllByTestId('manage-users-teams-card-container')
    .first()
    .findByTestId('card-header')
    .should('not.have.text', '00Cypress Test User Updated');
});
