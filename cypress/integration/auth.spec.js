describe('auth related tests', () => {
  it('go to users overview', () => {
    // auth
    cy.auth();

    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-manage-teams-button').click();
    cy.findByTestId('user_management.general.users').click();
  });

  it('adjust auth permissions', () => {
    cy.get(':nth-child(6) > [data-cy=card-container]').click();
    cy.findByTestId('Administrator').click();
    cy.findByTestId('contained-button').click();

    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-manage-teams-button').click();
    cy.findByTestId('user_management.general.users').click();
    cy.get(':nth-child(6) > [data-cy=card-description]').contains(
      'Administrator'
    );
    cy.findByTestId('card-description').click();
  });
});
