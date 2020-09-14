const currentDate = new Date();
const id = currentDate.getTime();

describe('multi year project view', () => {
  it('go to multiyear project view', () => {
    cy.auth();
    cy.findByTestId('sidebar-item-0').click();
  });

  it('check overview', () => {
    cy.findByTestId('prio-panel').should('exist');
    cy.findByTestId('sdg-tab').should('exist');
    cy.findByTestId('map-tab').should('exist');
    cy.findByTestId('stat-item-0').should('exist');
    //   .should('not.contain', 0);
    cy.findByTestId('stat-item-1').should('exist');
    cy.findByTestId('stat-item-2').should('exist');
  });

  it('check date picker', () => {
    cy.findByTestId('date-picker-inline').should('exist');
    cy.findByTestId('date-picker-dialog').should('exist');
  });
});
