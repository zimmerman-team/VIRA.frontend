/// <reference types="Cypress" />

describe('edit an existing report', () => {
  it('go to reports overview page', () => {
    // authenticate
    cy.auth().then(() => {
      // go to reports overview
      cy.goToReportsOverview();
    });
  });

  it('edit report page', () => {
    // save previous title
    // todo: maybe use a cookie or localstorage for this?
    let prevTitle = '';

    cy.get(
      '[data-testid=MuiDataTableBodyCell-1-0] > [class^=MUIDataTableBodyCell-root] > [class^=LinkCell__CustomLink]'
    )
      .should('exist')
      .invoke('text')
      .then((text1) => {
        prevTitle = text1;
        console.log('text1', text1);
      });

    // click top report
    cy.get(
      '[data-testid=MuiDataTableBodyCell-1-0] > [class^=MUIDataTableBodyCell-root] > [class^=LinkCell__CustomLink]'
    )
      .should('exist')
      .click()
      // click edit button if report is not a draft
      .then(() => {
        !prevTitle.includes('[Draft]') && cy.findByText('Edit report').click();
      });

    // use exact time as new title
    const currentDate = new Date();
    const newTitle = currentDate.getTime();

    // type new title
    cy.findByTestId('outcome-title').children().clear().type(newTitle);

    // next
    cy.findByTestId('next-button').click();

    cy.findByTestId('other-funders').click();
    // cy.get('#autocomplete-countries-option-0').click();

    cy.findByTestId('next-button').click();
    cy.findByTestId('next-button').click();
    cy.findByTestId('next-button').click();

    // save
    cy.findByTestId('submit-button').click();

    // go to report
    cy.wait(2000);
    cy.findByTestId('dialog-button').click();

    // check if title has been updated
    cy.contains(newTitle).should('exist');
  });
});
