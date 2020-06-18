/// <reference types="Cypress" />
describe('Manage users CRUD', () => {
  it('manage users crud', () => {
    // authenticate
    cy.auth();

    // goto page
    cy.findByTestId('usercard-button').click();
    cy.visit('/super-admin/manage-users');

    // check elements & interactions
    cy.findByTestId('manage-users-teams-title')
      .should('exist')
      .and('contain.text', 'Users');
    cy.findByTestId('manage-users-teams-add-button').should('exist');
    cy.findAllByTestId('manage-users-teams-card-container').should('exist');

    // crud team
    cy.createNewUser();
    cy.readUser();
    // cy.updateUser();
    // cy.deleteUser();

    cy.get('body').happoScreenshot({
      component: 'Manage Teams',
      variant: 'base',
    });
  });
});
