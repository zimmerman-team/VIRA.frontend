import { getRandomInt } from '../support/utils';
/// <reference types="Cypress" />
describe('project detail page', () => {
  it('test project detail page', () => {
    // authenticate
    cy.auth().then(() => {
      cy.findByTestId('sidebar-item-1').click();

      let storedProjects = [];

      cy.wait(3000).then(() => {
        storedProjects = JSON.parse(localStorage.getItem('projectsE2E'));
        cy.findByText(storedProjects[getRandomInt(0, 9)]).click();
      });
    });
  });

  it('should check project detail', () => {
    cy.findByTestId('project-title').should('exist');

    // report button
    cy.findByTestId('generate-report-button').should('exist');
  });

  /*it('make a screenshot', () => {
    cy.get('body').happoScreenshot({
      component: 'Project detail',
      variant: 'base',
    });
  });*/
});
