beforeEach(() => {
  cy.visit('/');
});

it('greets the user with a welcome message', () => {
  cy.url()
    .should('equal', 'https://preprod.developer.vizio.com/login');
});