/// <reference types="Cypress" />
/// <reference types="Cypress" />
describe('edit report page', () => {
  it('test edit report page', () => {
    // authenticate
    cy.auth();

    cy.findByTestId('sidebar-item-3').click();
    cy.get('[data-testid=MuiDataTableBodyCell-1-0]')
      .children()
      .click();

    // save previous title
    const prevTitle = '';

    cy.wait(2000).then(() => {
      cy.get('[data-cy=report-title]')
        .invoke('text')
        .then(text1 => {
          prevTitle = text1;
        });
    });

    cy.findByTestId('report-title').should('exist');

    // click edit button
    cy.findByTestId('contained-button').click();

    // use exact time as new title
    const currentDate = new Date();
    const newTitle = currentDate.getTime();

    cy.get('[data-cy=outcome-title]')
      .children()
      .clear()
      .type(newTitle);

    // todo: change finByText to stable indicator for 'next' click (test wont work if language is changed currently)

    cy.findByText('Next').click();
    cy.findByText('Next').click();
    cy.findByText('Next').click();
    cy.findByText('Next').click();

    cy.findByText('Save').click();

    cy.findByText('Go to Report').click();

    // Check if title has been updated
    cy.contains(newTitle).should('exist');
  });
});
