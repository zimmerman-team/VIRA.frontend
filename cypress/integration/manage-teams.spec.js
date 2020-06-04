/// <reference types="Cypress" />
describe('Manage teams CRUD', () => {
  it('manage teams crud', () => {
    // authenticate
    cy.auth();

    // goto page
    cy.findByTestId('usercard-button').click();
    cy.visit('/super-admin/manage-teams');

    // check elements & interactions
    cy.findByTestId('manage-users-teams-title')
      .should('exist')
      .and('contain.text', 'Manage Teams');
    cy.findByTestId('manage-users-teams-add-button').should('exist');
    cy.findAllByTestId('manage-users-teams-card-container').should('exist');

    // crud team
    cy.createNewTeam();
    cy.readTeam();
    cy.updateTeam();
    cy.deleteTeam();

    cy.get('body').happoScreenshot({
      component: 'Manage Teams',
      variant: 'base',
    });
  });
});
