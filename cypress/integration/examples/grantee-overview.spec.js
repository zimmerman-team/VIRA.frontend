/// <reference types="Cypress" />
describe('grantee overview page', () => {
  it('test grantee overview page', () => {
    // authenticate
    cy.auth();
    // goto page
    cy.visit('/list/1');

    cy.listTabs();
  });
});
