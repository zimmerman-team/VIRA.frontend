describe('date range filter test', () => {
  it('go to reports', () => {
    // auth
    cy.auth();
    cy.findByTestId('sidebar-item-3').click();
  });

  it('daterange picker exists', () => {
    cy.get('[data-testid="Filter Table-iconButton"]').should('exist').click();

    cy.findByText('This Week').should('exist');
    cy.findByText('Last Week').should('exist');
    cy.findByText('This Month').should('exist');
    cy.findByText('Last Month').should('exist');
  });

  /* it('make screenshot', () => {
    cy.get('body').happoScreenshot({
      component: 'Filter by date',
      variant: 'base',
    });
  });*/
});
