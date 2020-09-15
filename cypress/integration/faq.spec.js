/// <reference types="Cypress" />
describe('faq page', () => {
  it('test faq page', () => {
    // authenticate
    cy.auth();
    // goto page
    // cy.visit('/faq');
    cy.findByTestId('sidebar-item-4').click();
    // check elements
    cy.findByTestId('faq-title').should('exist');
    cy.findByTestId('question-0-title').should('exist');
    cy.findByTestId('question-1-title').should('exist');
    cy.findByTestId('question-2-title').should('exist');
    cy.findByTestId('question-3-title').should('exist');
    cy.findByTestId('question-0-expl').should('exist');
    cy.findByTestId('question-1-expl').should('exist');
    cy.findByTestId('question-2-expl').should('exist');
    cy.findByTestId('question-3-expl').should('exist');

    // cy.get('body').happoScreenshot();

    cy.get('body').happoScreenshot({
      component: 'FAQ page',
      variant: 'base',
    });
  });
});
