// cypress/integration/app.spec.js

describe('Navigation', () => {
  it('should navigate to the dashboard page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');
    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('CODAC');
    // Find a link with an href attribute containing "dashboard" and click it
    cy.get('a[href*="dashboard"]').click();

    // The new url should include "/dashboard"
    cy.url().should('include', '/dashboard');
  });
});

const asModule = {};
export default asModule;
