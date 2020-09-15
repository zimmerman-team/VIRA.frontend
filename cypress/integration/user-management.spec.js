const currentDate = new Date();
const id = currentDate.getTime();

describe('create and delete admin user', () => {
  it('go to users overview', () => {
    cy.auth();

    cy.findByTestId('usercard-button').should('exist').click();
    cy.findByTestId('usercard-manage-teams-button').should('exist').click();
    cy.findByTestId('user_management.general.users').should('exist').click();
  });

  it('create new admin user', () => {
    cy.findByTestId('admin-add-button').should('exist').click();
    cy.findByTestId('FirstName').should('exist').click().type('Cypress');
    cy.findByTestId('LastName').should('exist').click().type(id);
    cy.findByTestId('Email').should('exist').click().type(`${id}@user.test`);
    cy.get('#select-outlined').should('exist').click();
    cy.get('[data-value="e0d70f9c-30e3-476e-b25f-a663daa1acb9"]')
      .should('exist')
      .click();
    cy.findByTestId('contained-button').should('exist').click();
    cy.wait(1000);
    cy.findByTestId('usercard-button').should('exist').click();
    cy.findByTestId('usercard-manage-teams-button').should('exist').click();
    cy.findByTestId('user_management.general.users').should('exist').click();
  });

  /*  it('adjust user auth permissions', () => {
    cy.findByText(`Cypress ${id}`)
      .should('exist')
      .click();
    cy.findByTestId('Administrator')
      .should('exist')
      .click();
    cy.findByTestId('contained-button')
      .should('exist')
      .click();

    cy.findByTestId('usercard-button')
      .should('exist')
      .click();
    cy.findByTestId('usercard-manage-teams-button')
      .should('exist')
      .click();
    cy.findByTestId('user_management.general.users')
      .should('exist')
      .click();
    cy.reload();
    cy.get(
      ':nth-child(6) > [data-cy=card-container] > [data-cy=card-description]'
    )
      .should('exist')
      .contains('Administrator');
  });*/

  it('delete user', () => {
    cy.findByTestId(`delete-Cypress ${id}`).should('exist').click();
    cy.findByText('Delete').should('exist').click();
    cy.wait(1000);
  });
});
