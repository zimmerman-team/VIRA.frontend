/// <reference types="Cypress" />
describe('generate report page', () => {
  it('test generate report page', () => {
    // authenticate
    cy.auth();

    cy.findByTestId('sidebar-item-1').click();
    cy.get('[data-testid=MuiDataTableBodyCell-3-0]')
      .children()
      .click();

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
    cy.get('.react-geocoder-results > :nth-child(1)').click();

    // next
    cy.findByTestId('next-button').click();

    cy.get('#autocomplete-countries').click();
    cy.get('#autocomplete-countries').type('Refugees');
    cy.get('#autocomplete-countries-option-0').click();

    cy.findByTestId('budget-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);

    cy.findByTestId('insinger-contribution-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);

    cy.findByTestId('target-beneficiaries-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(50);

    cy.findByTestId('total-committed-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1000);

    cy.findByTestId('which-when-item-0')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(25);

    cy.findByTestId('which-when-item-1')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(25);

    // next
    cy.findByTestId('next-button').click();

    cy.findByTestId('text-area-1')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 1');

    cy.findByTestId('text-area-2')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 2');

    cy.get('[testattr=media-button]')
      .should('exist')
      .click();

    cy.findByTestId('file-input-label').should('exist');
    cy.findByTestId('media-save-button').should('exist');

    cy.findByTestId('media-cancel-button')
      .should('exist')
      .click();
  });
});
