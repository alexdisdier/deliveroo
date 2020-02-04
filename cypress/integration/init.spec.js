describe('Deliveroo', () => {
  it('visits a clone of deliveroo website', () => {
    cy.visit('http://localhost:3000')
  })

  it('adds 2 meals and a tip', () => {
    cy.getByTestId('card-meal').first().click();
    cy.getByTestId('meal-quantity').should('have.text', '1');

    cy.getByTestId('card-meal').eq(2).click();

    cy.getByTestId('increase-tip').click()
  })

})