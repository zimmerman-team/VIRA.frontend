/**
 * Code generated with Fd Cypress Recorder.
 * https://github.com/FDMediagroep/fd-cypress-recorder
 */

/// <reference types="Cypress" />
describe('sign in again', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login', {
      auth: {
        username: Cypress.env('BASIC_USER') || '',
        password: Cypress.env('BASIC_PASS') || '',
      },
    });
    cy.clearCookies();
    cy.reload(true);
  });

  afterEach(() => {
    cy.clearCookies();
  });

  it('lorem ipsim', () => {
    cy.viewport(1440, 821);
    cy.visit('http://localhost:3000/login', {
      auth: {
        username: Cypress.env('BASIC_USER') || '',
        password: Cypress.env('BASIC_PASS') || '',
      },
    });
    cy.get(':nth-child(6) > button').click();
  });
});
