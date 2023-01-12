// app.cy.js
import { aliasMutation, aliasQuery } from '../utils/graphql-test-utils'

context('Tests', () => {
  beforeEach(() => {
    cy.intercept('POST', `https://codac-364707.ey.r.appspot.com/graphql`, (req) => {
      // Queries
      aliasMutation(req, 'Login')

      // ...
    })
  })

  it('should verify login data', () => {
    cy.wait('@gqlLoginMutation')
      .its('response.body.data.login')
      .should('have.property', 'id')
      .and('have.property', 'token')
  })
})