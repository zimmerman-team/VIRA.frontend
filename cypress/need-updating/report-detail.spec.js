/// <reference types="Cypress" />
describe('report detail page', () => {
  it('test report detail page', () => {
    // authenticate
    cy.auth();
    // goto page

    cy.findByTestId('sidebar-item-3').click();

    cy.wait(5000);
    cy.get('[data-testid=MuiDataTableBodyCell-1-0]')
      .children()
      .click();

    cy.viztabs();

    cy.findByTestId('outcomes-card').should('exist');
    cy.findByTestId('monitor-card').should('exist');
    // cy.findByTestId('media-card').should('exist');
    cy.findByTestId('challenges-card').should('exist');
    cy.findByTestId('observations-card').should('exist');
    cy.findByTestId('future-plans-card').should('exist');
    cy.findByTestId('other-comments-card').should('exist');

    // cy.get('body').happoScreenshot();
  });
});
