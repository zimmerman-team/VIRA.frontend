/// <reference types="Cypress" />
// DONE
describe('grantee overview page', () => {
  it('test grantee overview page', () => {
    // authenticate
    cy.auth();
    // goto page
    cy.visit('/list/1');
    // cy.get([data-cy=sidebar-item-2] > .MuiButtonBase-root

    cy.findByTestId('sidebar-item-2').click();
    cy.listTabs();

    cy.get('body').happoScreenshot({
      component: 'Grantee overview',
      variant: 'base',
    });
    // cy.get('body').happoScreenshot();
  });
});
