const currentDate = new Date();
const id = currentDate.getTime();

describe('auth related tests', () => {
  it('authenticate', () => {
    // auth
    cy.auth();
  });

  it('go to users overview', () => {
    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-manage-teams-button').click();
    cy.findByTestId('user_management.general.users').click();
  });

  it('create new user', () => {
    cy.findByTestId('admin-add-button').click();
    cy.findByTestId('FirstName')
      .click()
      .type('Cypress');
    cy.findByTestId('LastName')
      .click()
      .type(id);
    cy.findByTestId('Email')
      .click()
      .type(`${id}@user.test`);
    cy.get('#select-outlined').click();
    cy.get('[data-value="e0d70f9c-30e3-476e-b25f-a663daa1acb9"]').click();
    cy.findByTestId('contained-button').click();
    cy.wait(1000);
    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-manage-teams-button').click();
    cy.findByTestId('user_management.general.users').click();
  });

  it('adjust user auth permissions', () => {
    cy.findByText(`Cypress ${id}`).click();
    cy.findByTestId('Administrator').click();
    cy.findByTestId('contained-button').click();

    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-manage-teams-button').click();
    cy.findByTestId('user_management.general.users').click();
    cy.reload();
    cy.get(
      ':nth-child(6) > [data-cy=card-container] > [data-cy=card-description]'
    ).contains('Administrator');
  });

  it('delete user', () => {
    cy.findByTestId(`delete-Cypress ${id}`).click();
    cy.findByText('Delete').click();
    cy.wait(1000);
  });
});
