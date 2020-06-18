/// <reference types="Cypress" />
describe('user card', () => {
  it('test user card', () => {
    // authenticate
    cy.auth();

    // check elements & interactions
    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-manage-account-button').click();
    cy.waitPageLoader();
    cy.findByTestId('manage-user-input-first-name')
      .children()
      .first()
      .clear()
      .type('Test');
    cy.wait(1000);
    cy.findByTestId('manage-user-save-button').click();
    cy.waitPageLoader();

    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-manage-account-button').click();
    cy.waitPageLoader();
    cy.findByTestId('manage-user-input-first-name')
      .children()
      .first()
      .clear()
      .type('Zimmerman');
    cy.wait(1000);
    cy.findByTestId('manage-user-save-button').click();
    cy.waitPageLoader();

    // cy.get('body').happoScreenshot();
    cy.get('body').happoScreenshot({
      component: 'Usercard',
      variant: 'base',
    });
  });
});
