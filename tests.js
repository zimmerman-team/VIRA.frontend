Fg7PkcsMfaoLkhffEL ^ o;

cy.visit('http://localhost:3000/login');
cy.get('#login-email').click();
cy.get('#login-email').type('user@zimmermanzimmerman.nl');
cy.get('#login-password').click();
cy.get('#login-password').click();
cy.get('#login-password').type('Fg7PkcsMfaoLkhffEL^o');
cy.get('.MuiButton-label').click();

cy.visit('http://localhost:3000/recover-password');
cy.get('#recovery-email').click();
cy.get('#recovery-email').type('user@zimmermanzimmerman.nl');
cy.get('.MuiButton-label').click();

/**
 * Code generated with Fd Cypress Recorder.
 * https://github.com/FDMediagroep/fd-cypress-recorder
 */

/// <reference types="Cypress" />
describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dashboard');
    cy.clearCookies();
    cy.reload(true);
  });

  afterEach(() => {
    cy.clearCookies();
  });

  it('check if homepage contains all required elements', () => {
    cy.viewport(1440, 821);
    cy.visit('http://localhost:3000/dashboard');
    cy.get('[href="/list/0"] > [_css3="#222222"]').should('exist');
    cy.get('[href="/list/1"] > [_css3="#222222"]').should('exist');
    cy.get('[href="/list/2"] > [_css3="#222222"]').should('exist');
  });
});

// home

/// <reference types="Cypress" />
describe('Test Suite ...', () => {
  afterEach(() => {
    cy.clearCookies();
  });

  it('should ...', () => {
    cy.get(
      ':nth-child(1) > :nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)'
    ).should('exist');
    cy.get('[data-cy="sdg-tab"]').click();
    cy.get('[data-cy="map-tab"]').click();
    cy.get('[data-cy="prio-tab"]').click();
  });
});

// grantee detail

/// <reference types="Cypress" />
describe('grantee detail page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/grantee/5e411b95e1886e08a3886cec/detail');
    cy.clearCookies();
    cy.reload(true);
  });

  afterEach(() => {
    cy.clearCookies();
  });

  it('show grantee information', () => {
    cy.viewport(1440, 821);
    cy.visit('http://localhost:3000/grantee/5e411b95e1886e08a3886cec/detail');
    cy.get(
      '[_css2="font-size:34px;font-weight:600;letter-spacing:0.25px;line-height:normal;@media (max-width:768px){font-size:25px;line-height:1.3;font-weight:600;}"]'
    ).should('exist');
    cy.get('[_css="#000"]').should('exist');
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(4)').should('exist');
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(6)').should('exist');
    cy.get(
      ':nth-child(9) > [aria-labelledby="simple-tab-0"] > :nth-child(1)'
    ).should('exist');
  });
});
