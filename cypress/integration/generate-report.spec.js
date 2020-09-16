/// <reference types="Cypress" />
describe('report flow', () => {
  it('go to generate report module', () => {
    // authenticate
    cy.auth().then(() => {
      cy.goToProjectsOverview();

      cy.selectRandomProject().then(() => {
        cy.findByTestId('generate-report-button').should('exist').click();
      });
    });
  });

  it('fill in outcomes', () => {
    cy.findByTestId('outcomes-title').should('exist');
    cy.findByTestId('add-location').should('exist');
    cy.findByTestId('exact-location').should('exist');

    cy.get('#outcome1').type('e2e report title');

    cy.get('#autocomplete-countries').click();

    cy.get('#autocomplete-countries-option-0').click();

    cy.get('.react-geocoder > .MuiInputBase-root > .MuiInputBase-input').type(
      'Netherlands {enter}'
    );
    cy.get('.react-geocoder-results > :nth-child(1)').click();
  });

  it('fill in policy priorities', () => {
    // go to policy priorities tab
    cy.findByTestId('next-button').should('exist').click();

    cy.get('#autocomplete-countries')
      .should('exist')
      .click()
      .type('Homelessness');

    cy.get('#autocomplete-countries-option-0').click();

    /*cy.get('[data-cy=budget-field]')
      .click()
      .type('{selectall}{backspace}')
      .type(10);
*/
    /*cy.findByTestId('insinger-contribution-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(2);
*/
    /*cy.findByTestId('target-beneficiaries-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);
*/
    /*  cy.findByTestId('total-committed-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(10);*/

    // open funders list and click top option
    // cy.findByTestId('other-funders').should('exist').click().type('Utopa');
    // cy.get('#autocomplete-countries-option-0').click();

    /*cy.findByTestId('which-when-item-0')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);
*/
    /*cy.findByTestId('which-when-item-1')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);*/
  });

  /*  it('fill in indicator & verification', () => {
    cy.findByTestId('next-button').should('exist').click();

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

  it('fill in chalenges & plans', () => {
    cy.findByTestId('next-button').should('exist').click();

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
  });

  it('preview report', () => {
    cy.findByTestId('next-button').should('exist').click();

    cy.findByTestId('title-preview-card').should('exist');
    cy.findByTestId('location-preview-card').should('exist');
    cy.findByTestId('policy-priority-preview-card').should('exist');
    cy.findByTestId('budget-preview-card').should('exist');
    cy.findByTestId('target-beneficiaries-preview-card').should('exist');
    cy.findByTestId('include-ben-preview-card').should('exist');
    cy.findByTestId('key-outcomes-preview-card').should('exist');
    cy.findByTestId('outcomes-preview-card').should('exist');
    cy.findByTestId('key-implementation-challenges-preview-card').should(
      'exist'
    );
    cy.findByTestId('other-project-preview-card').should('exist');
    cy.findByTestId('future-plans-preview-card').should('exist');
    cy.findByTestId('other-comments-preview-card').should('exist');
  });

  it('submit report', () => {
    cy.findByTestId('submit-button').should('exist').click();
  });

  it('click away dialog', () => {
    cy.findByTestId('dialog-button').should('exist').click();
  });*/

  /*it('add media', () => {
    cy.get('[testattr=media-button]')
      .should('exist')
      .click();

    cy.findByText('Drag and Drop picture').should('exist');
    // todo: add actual media file

    cy.get('[data-cy=media-cancel-button]')
      .should('exist')
      .click();
  });*/

  /*it('make screenshot', () => {
    cy.get('body').happoScreenshot({
      component: 'Create report',
      variant: 'base',
    });
  });*/
});
