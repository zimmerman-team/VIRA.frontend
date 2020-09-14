import { getRandomInt } from '../support/utils';
/// <reference types="Cypress" />
describe('project detail page', () => {
  it('test project detail page', () => {
    // authenticate
    cy.auth().then(() => {
      cy.goToProjectsOverview();
      cy.selectRandomProject();
    });
  });

  it('should check project detail', () => {
    cy.findByTestId('project-title').should('exist');

    // report button
    cy.findByTestId('generate-report-button').should('exist');

    cy.get('body').happoScreenshot({
      component: 'project detail',
    });
  });
});
