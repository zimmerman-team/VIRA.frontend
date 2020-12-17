/// <reference types="Cypress" />
describe('test internalization', () => {
  it.only('test internalization', () => {
    // authenticate
    cy.auth();

    // check elements
    cy.findByTestId('stat-item-text-0').should('contain.text', 'Projecten');

    cy.findByTestId('language-en').click();
    cy.wait(2000);

    cy.findByTestId('stat-item-text-0').should('contain.text', 'Projects');

    /*cy.get('body').happoScreenshot({
      component: 'Privacy page',
      variant: 'base',
    });*/
  });
});
