/// <reference types="Cypress" />
describe('generate report page', () => {
  it('go to generate report page', () => {
    // authenticate
    cy.auth();

    cy.findByTestId('sidebar-item-1').click();
    cy.get('[data-testid=MuiDataTableBodyCell-3-0]')
      .children()
      .click();
  });

  it('check overview', () => {
    cy.findByTestId('sidebar-item-1').click();

    cy.get('[data-testid=MuiDataTableBodyCell-3-1]').click();

    // cy.findByTestId('BreadCrumbs').should('exist');
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
  });

  it('fill in all the fields', () => {
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

    cy.get('[data-cy=budget-field]')
      .click()
      .type('{selectall}{backspace}')
      .type(10);

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

    // open funders list and click top option
    cy.findByTestId('other-funders')
      .should('exist')
      .click()
      .type('funder one');
    cy.get('#autocomplete-countries-option-0').click();

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
  });

  it('add media', () => {
    cy.get('[testattr=media-button]')
      .should('exist')
      .click();

    cy.findByText('Drag and Drop picture').should('exist');
    // todo: add actual media file

    cy.get('[data-cy=media-cancel-button]')
      .should('exist')
      .click();
  });
  it('fill in rest of the fields', () => {
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

    cy.findByTestId('text-area-3')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 3');

    cy.findByTestId('text-area-4')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 4');

    // next
    cy.findByTestId('next-button').click();
  });

  it('make screenshot', () => {
    cy.get('body').happoScreenshot({
      component: 'Create report',
      variant: 'base',
    });
  });
});
