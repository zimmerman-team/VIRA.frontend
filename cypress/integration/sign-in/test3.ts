cy.visit('http://localhost:3000/login');
cy.get('#login-email').click();
cy.get('#login-email').type('user@zimmermanzimmerman.nl');
cy.get('#login-password').type('{backspace}');
cy.get('#login-password').click();
cy.get('#login-password').type('Fg7PkcsMfaoLkhffEL^o');
cy.get('[data-cy=login-button]').click();
