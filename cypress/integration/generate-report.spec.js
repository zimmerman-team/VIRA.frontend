/// <reference types="Cypress" />
describe('report flow', () => {
  it('go to generate report module', () => {
    // authenticate
    cy.auth().then(() => {
      cy.goToProjectsOverview();

      cy.findByTestId('language-en').click();
      cy.wait(2000);

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
    cy.get('[data-cy=budget-field]')
      .click()
      .type('{selectall}{backspace}')
      .type(10);
    cy.findByTestId('insinger-contribution-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(2);
  });

  it('fill in policy priorities', () => {
    // go to policy priorities tab
    cy.findByTestId('next-button').should('exist').click();

    /* cy.get('#autocomplete-countries')
      .should('exist')
      .click()
      .type('Homelessness');*/

    cy.findByTestId('dropdown-one').click();
    cy.findByTestId('dropdown-item-0').click().type('20');
    cy.findByTestId('dropdown-item-1').click().type('20');
    cy.findByTestId('dropdown-item-2').click().type('20');
    cy.findByTestId('dropdown-item-3').click().type('20');
    cy.findByTestId('dropdown-item-4').click().type('20');

    cy.findByTestId('dropdown-apply-button').click();

    cy.findByTestId('dropdown-one').click();
    cy.findByTestId('dropdown-close-button').click();

    cy.findByTestId('dropdown-two').click();
    cy.findByTestId('dropdown-item-0').click().type('20');
    cy.findByTestId('dropdown-item-1').click().type('20');
    cy.findByTestId('dropdown-item-2').click().type('20');
    cy.findByTestId('dropdown-item-3').click().type('20');
    cy.findByTestId('dropdown-item-4').click().type('20');

    cy.findByTestId('dropdown-apply-button').click();

    cy.findByTestId('dropdown-one').click();
    cy.findByTestId('dropdown-close-button').click();

    cy.findByTestId('target-beneficiaries-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);
    cy.findByTestId('total-committed-field')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(10);

    // open funders list and click top option
    cy.findByTestId('dropdown-funders').should('exist').click().type('Utopa');
    // cy.findByTestId('other-funders').should('exist').click().type('Utopa');
    cy.get('#autocomplete-countries-option-0').click();

    /*cy.findByTestId('which-when-item-0')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);
    cy.findByTestId('which-when-item-1')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);
    cy.findByTestId('which-when-item-2')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);
    cy.findByTestId('which-when-item-3')
      .should('exist')
      .click()
      .type('{backspace}')
      .type(1);*/
  });

  it('fill in indicator & verification', () => {
    cy.findByTestId('next-button').should('exist').click();

    cy.findByTestId('text-area-1-container').should('exist').click();

    cy.findByTestId('text-area-1')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 1');

    cy.findByTestId('text-area-2-container').should('exist').click();

    cy.findByTestId('text-area-2')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 2');

    cy.findByTestId('text-area-3-container').should('exist').click();

    cy.findByTestId('text-area-3')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 3');

    cy.findByTestId('text-area-4-container').should('exist').click();

    cy.findByTestId('text-area-4')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 4');

    cy.findByTestId('text-area-5-container').should('exist').click();

    cy.findByTestId('text-area-5')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 5');

    cy.findByTestId('text-area-6-container').should('exist').click();

    cy.findByTestId('text-area-6')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 6');

    cy.findByTestId('text-area-7-container').should('exist').click();

    cy.findByTestId('text-area-7')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 7');
  });

  it('fill in chalenges & plans', () => {
    cy.findByTestId('next-button').should('exist').click();

    cy.findByTestId('text-area-1-container').should('exist').click();

    cy.findByTestId('text-area-1')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 1');

    cy.findByTestId('text-area-2-container').should('exist').click();

    cy.findByTestId('text-area-2')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 2');

    cy.findByTestId('text-area-3-container').should('exist').click();

    cy.findByTestId('text-area-3')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 3');

    // open funders list and click top option
    cy.findByTestId('dropdown-1').should('exist').click().type('A little');
    // cy.findByTestId('other-funders').should('exist').click().type('Utopa');
    cy.get('#autocomplete-countries-option-0').click();

    // open funders list and click top option
    cy.findByTestId('dropdown-2').should('exist').click().type('Yes');
    // cy.findByTestId('other-funders').should('exist').click().type('Utopa');
    cy.get('#autocomplete-countries-option-0').click();

    cy.findByTestId('text-area-6-container').should('exist').click();

    cy.findByTestId('text-area-6')
      .should('exist')
      .click()
      .type('{backspace}')
      .type('Lorem ipsum dolor simet text area 6');
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
    // cy.findByTestId('outcomes-preview-card').should('exist');
    cy.findByTestId('key-implementation-challenges-preview-card').should(
      'exist'
    );
    cy.findByTestId('other-project-preview-card').should('exist');

    cy.findByTestId('other-comments-preview-card').should('exist');
  });

  it('submit report', () => {
    cy.findByTestId('submit-button').should('exist').click();
  });

  it('click away dialog', () => {
    cy.findByTestId('dialog-button').should('exist').click();
  });

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
