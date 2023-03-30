beforeEach(() => {
  cy.visit('/');
});

it('greets the user with a welcome message', () => {
  cy.url()
    .should('equal', 'https://developer.vizio.com/login');
});