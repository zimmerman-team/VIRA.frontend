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

    cy.findByTestId('outcome-title')
      .children()
      .clear()
      .type(newTitle);

    // next
    cy.findByTestId('next-button').click();
    cy.findByTestId('next-button').click();
    cy.findByTestId('next-button').click();
    cy.findByTestId('next-button').click();

    // save
    cy.findByTestId('submit-button').click();

    // go to report
    cy.findByTestId('dialog-button').click();

    // check if title has been updated
    cy.contains(newTitle).should('exist');
  });
});
