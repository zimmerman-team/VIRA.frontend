/// <reference types="Cypress" />
describe('report overview', () => {
  it('test report overview page', () => {
    // authenticate
    cy.auth();
    // goto page
    // cy.visit('/list/2');
    cy.findByTestId('sidebar-item-3').click();

    cy.listTabs();

    cy.get('body').happoScreenshot({
      component: 'Report overview',
      variant: 'base',
    });
    // cy.get('body').happoScreenshot();
  });
});
