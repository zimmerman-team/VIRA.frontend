/// <reference types="Cypress" />

describe('edit report page', () => {
  it('test report overview page', () => {
    // authenticate
    cy.auth();

    cy.findByTestId('sidebar-item-3').click();

    cy.listTabs();

    cy.get('body').happoScreenshot({
      component: 'Report overview',
      variant: 'base',
    });
    // cy.get('body').happoScreenshot();
  });
  it('test edit report page', () => {
    cy.findByTestId('sidebar-item-3').click();
    // save previous title
    const prevTitle = '';
    cy.get('[data-testid=MuiDataTableBodyCell-1-1]')
      .invoke('text')
      .then(text1 => {
        prevTitle = text1;
      });

    // click top report
    cy.get('[data-testid=MuiDataTableBodyCell-1-1]')
      .children()
      .click()
      // click edit button if report is not a draft
      .then(() => {
        !prevTitle.includes('[Draft]') && cy.findByText('Edit report').click();
      });

    // use exact time as new title
    const currentDate = new Date();
    const newTitle = currentDate.getTime();

    // type new title
    cy.findByTestId('outcome-title')
      .children()
      .clear()
      .type(newTitle);

    // next
    cy.findByTestId('next-button').click();

    cy.findByTestId('other-funders').click();
    cy.get('#autocomplete-countries-option-0').click();

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
