/// <reference types="Cypress" />
describe('project overview', () => {
  it('test project overview', () => {
    // authenticate
    cy.auth();
    // goto page
    cy.visit('/list/0');

    cy.listTabs();
  });
});
