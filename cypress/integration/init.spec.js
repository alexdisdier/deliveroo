describe('Deliveroo', () => {
  it('visits a clone of deliveroo website', () => {
    cy.visit('http://localhost:3000')
  })

  it('adds a popular brunch meal to basket', () => {
    cy.get('section').first().get('.card').first().click()
  })

  it('adds a petit dejeuner meal to basket', () => {
    cy.get('.card').eq(2).click()
  })

  it('adds a tip', () => {
    cy.getByTestId('increase-tip').click()
  })
})