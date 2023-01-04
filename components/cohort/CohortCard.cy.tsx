import React from 'react'
import CohortCard from './CohortCard'

describe('<CohortCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CohortCard />)
  })
})