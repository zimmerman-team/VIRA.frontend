/// <reference types="Cypress" />
describe('reports', () => {
  it('test reports page', () => {
    // authenticate
    cy.auth();
    // goto page
    cy.visit('/report/2017161/outcomes');
    cy.findByTestId('BreadCrumbs').should('exist');

    //
    cy.findByTestId('report-title').should('exist');
    cy.findByTestId('report-stepper').should('exist');
    //
    cy.findByTestId('outcomes-title').should('exist');
    cy.findByTestId('add-location').should('exist');
    cy.findByTestId('exact-location').should('exist');
    //
    // cy.findByTestId('').should('exist');
    // cy.findByTestId('').should('exist');
    // cy.get('body').happoScreenshot();

    cy.get('body').happoScreenshot({
      component: 'Create report: outcomes',
      variant: 'base',
    });
  });
});
