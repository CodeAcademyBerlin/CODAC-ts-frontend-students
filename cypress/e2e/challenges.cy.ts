describe('My kitchen Test', () => {
  it('finds content type', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    // should be on a new url wihc includes "commands/actions"
    cy.url().should('include', '/commands/actions');

    //get an input, type into it
    cy.get('.action-email').type('fake@email.com');

    // verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com');
  });
});
