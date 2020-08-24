/// <reference types="Cypress" />
describe('project detail page', () => {
  it('test project detail page', () => {
    // authenticate
    cy.auth();

    cy.findByTestId('sidebar-item-1').click();

    cy.wait(3000);
    cy.get(
      '[data-testid=MuiDataTableBodyCell-1-0] > :nth-child(2) > [class^=LinkCell__CustomLink]'
    ).click();

    cy.findByTestId('project-title').should('exist');

    // report button
    cy.findByTestId('generate-report-button').should('exist');

    // viz tabs
    cy.viztabs();

    // outcomes
    // cy.findByTestId('key-outcomes').should('exist');
    // cy.findByTestId('indicator-verification').should('exist');

    // reports table
    cy.findByTestId('reports-table').should('exist');

    /*cy.get('body').happoScreenshot({
      component: 'Project detail',
      variant: 'base',
    });*/
  });
});
