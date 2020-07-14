describe('date range filter test', () => {
  it('go to reports', () => {
    // auth
    cy.auth();
    cy.findByTestId('sidebar-item-3').click();
  });

  it('daterange picker exists', () => {
    cy.findByTestId('Filter Table-iconButton')
      .should('exist')
      .click();

    cy.findByTestId('daterange-picker').should('exist');
    cy.findByTestId('daterange-item-0').should('exist');
    cy.findByTestId('daterange-item-1').should('exist');
    cy.findByTestId('daterange-item-2').should('exist');
    cy.findByTestId('daterange-item-3').should('exist');
  });

  it('todo: daterangepicker is functional', () => {
    //   todo: test daterange filter functionality
  });
});
