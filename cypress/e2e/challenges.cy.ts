describe('Finds to codingchallenges and naviagtes to add new challenge', () => {
  it('finds the site', () => {
    cy.visit('http://localhost:3000/codingchallenges');

    cy.getByData('button-test', { timeout: 10000 }).click();

    // should be on a new url '/codingchallenges/NewChallenge'
    cy.url().should('include', '/codingchallenges/NewChallenge');
  });
  it('the content of new challenge page is correct and one input contains Course', () => {
    cy.visit('http://localhost:3000/codingchallenges/NewChallenge');
    cy.get('h3').contains('challenge');
    cy.getByData('input-test').contains('Course');
  });
  it.only('a user can add a new challenge and get directed to new url', () => {
    cy.visit('http://localhost:3000/codingchallenges/NewChallenge');
    cy.getByData('course-input').type('data{downArrow}{enter}');
    cy.getByData('difficulty-input').type('2data{downArrow}{enter}');
    cy.getByData('title-input').type('test');
    cy.getByData('challenge-input').type('test challenge body');
    cy.getByData('submit-button').click();

    const id = 1;

    cy.visit(`http://localhost:3000/codingchallenges/${id}`);
    // cy.url().should('is', `codingchallenges/${id}`);
  });
});
