/// <reference types="Cypress" />
describe('grantee detail page', () => {
  it('test grantee detail page', () => {
    // authenticate
    cy.auth();

    cy.findByTestId('sidebar-item-2').click();
    cy.get('[data-testid=MuiDataTableBodyCell-0-0]')
      .children()
      .click();

    cy.findByTestId('grantee-detail-title').should('exist');
    // cy.findByTestId('grantee-detail-description').should('exist');
    cy.findByTestId('grantee-detail-contact').should('exist');

    cy.viztabs();

    cy.listTabsNoGrantees();

    // cy.get('body').happoScreenshot();
  });
});
