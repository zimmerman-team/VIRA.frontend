/// <reference types="Cypress" />
describe('project detail page', () => {
  it('test project detail page', () => {
    // authenticate
    cy.auth();

    cy.findByTestId('sidebar-item-1').click();
    cy.get('[data-testid=MuiDataTableBodyCell-3-0]').click();

    cy.findByTestId('BreadCrumbs').should('exist');
    cy.findByTestId('project-title').should('exist');

    // report button
    cy.findByTestId('contained-button').should('exist');

    // viz tabs
    cy.viztabs();

    // reports table
    cy.findByTestId('reports-table').should('exist');

    cy.findByTestId('contained-button').click();

    cy.findByTestId('outcomes-title').should('exist');
    cy.findByTestId('add-location').should('exist');
    cy.findByTestId('exact-location').should('exist');

    cy.get('#outcome1').type('e2e report title');

    cy.get('#autocomplete-countries').click();

    cy.get('#autocomplete-countries-option-0').click();

    cy.get('.react-geocoder > .MuiInputBase-root > .MuiInputBase-input').type(
      'Afghanistan {enter}'
    );

    // next
    cy.get('.bottom-nav___StyledContainedButton4-sc-7nwiqa-5').click();

    cy.get('#autocomplete-countries').click();
  });
});
