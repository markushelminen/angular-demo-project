describe('homepage', () => {
  it('Localhost works', () => {
    cy.visit('http://localhost:4200/');
    cy.title().should('eq', 'DemoProject')
  })
})

describe('Chuck Norris API', () => {
  it('Chuck api should return a joke', () => {
    cy.visit('http://localhost:4200/chuck');
    cy.get('.chuck-joke').should('contains.text', 'Chuck');
    cy.get('.chuck-joke').then(($joke) => {
      const txt = $joke.text();
      cy.get('.get-chuck').click();
      cy.get('.chuck-joke').should(($joke2) => {
        expect($joke2.text()).not.to.eq(txt);
      })
    })
  })
})