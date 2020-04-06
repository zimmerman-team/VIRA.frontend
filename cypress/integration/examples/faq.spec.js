/// <reference types="Cypress" />
describe('faq page', () => {
  it('test faq page', () => {
    cy.auth();

    cy.visit('/faq');

    cy.get('[data-cy="faq-title"]').should('exist');
    cy.get('[data-cy="question-0"]').should('exist');
    cy.get('[data-cy="question-1"]').should('exist');
    cy.get('[data-cy="question-2"]').should('exist');
    cy.get('[data-cy="question-3"]').should('exist');
    cy.get('[data-cy="question-0-expl"]').should('exist');
    cy.get('[data-cy="question-1-expl"]').should('exist');
    cy.get('[data-cy="question-2-expl"]').should('exist');
    cy.get('[data-cy="question-3-expl"]').should('exist');
  });
});
