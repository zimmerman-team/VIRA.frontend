/// <reference types="Cypress" />

describe('test overview of all pages', () => {
  it('test user card', () => {
    cy.auth();
    // check elements & interactions
    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-container').should('exist');
    cy.findByTestId('usercard-avatar').should('exist');
    cy.findByTestId('usercard-username').should('exist');
    cy.findByTestId('usercard-container').should('exist');
    cy.findByTestId('usercard-container').should('exist');
    cy.findByTestId('usercard-signout-button').should('exist');
    cy.findByTestId('usercard-privacy-button').should('exist');

    // cy.get('body').happoScreenshot();
    cy.get('body').happoScreenshot({
      component: 'Usercard',
      variant: 'base',
    });
  });

  it('test dashboard overview', () => {
    // goto page
    cy.findByTestId('sidebar-item-0').click();

    cy.findByTestId('stat-item-0').should('exist');
    cy.findByTestId('stat-item-1').should('exist');
    cy.findByTestId('stat-item-2').should('exist');

    cy.viztabs();

    cy.listTabs();
  });

  it('test project overview', () => {
    // goto page
    // cy.visit('/list/0');
    cy.findByTestId('sidebar-item-1').click();
    cy.listTabs();

    // cy.get('body').happoScreenshot();

    cy.get('body').happoScreenshot({
      component: 'Project overview',
      variant: 'base',
    });
  });

  it('test grantee overview page', () => {
    // goto page
    // cy.visit('/list/1');
    // cy.get([data-cy=sidebar-item-2] > .MuiButtonBase-root

    cy.findByTestId('sidebar-item-2').click();
    cy.listTabs();

    cy.get('body').happoScreenshot({
      component: 'Grantee overview',
      variant: 'base',
    });
  });

  it('test report page', () => {
    // goto page
    cy.findByTestId('sidebar-item-3').click();

    cy.listTabs();

    cy.get('body').happoScreenshot({
      component: 'Report overview',
      variant: 'base',
    });
    // cy.get('body').happoScreenshot();
  });

  it('test faq page', () => {
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

    cy.get('body').happoScreenshot({
      component: 'FAQ page',
      variant: 'base',
    });
  });

  it('test privacy page', () => {
    // goto page
    // cy.visit('/privacy');
    // check elements
    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-privacy-button').click();
    cy.findByTestId('privacy-page-title').should('exist');
    cy.findByTestId('privacy-page-description').should('exist');
    cy.findByTestId('privacy-item-0-title').should('exist');
    cy.findByTestId('privacy-item-0-description').should('exist');

    cy.get('body').happoScreenshot({
      component: 'Privacy page',
      variant: 'base',
    });
  });
});
