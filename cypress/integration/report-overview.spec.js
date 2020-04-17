/// <reference types="Cypress" />
describe('report overview', () => {
  it('test report overview page', () => {
    // authenticate
    cy.auth();
    // goto page
    // cy.visit('/list/2');
    cy.findByTestId('sidebar-item-3').click();

    cy.listTabs();
  });
});