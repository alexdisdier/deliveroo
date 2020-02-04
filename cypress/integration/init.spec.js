describe('Deliveroo', () => {
  it('visits a clone of deliveroo website', () => {
    cy.visit('http://localhost:3000');
  });

  it('adds 2 meals, a tip and submit basket', () => {
    cy.getByTestId('card-meal')
      .first()
      .click();
    cy.getByTestId('meal-quantity').should('have.text', '1');

    cy.getByTestId('card-meal')
      .eq(2)
      .click();

    cy.getByTestId('increase-tip').click();

    cy.getByTestId('submit-basket').should('have.class', 'btn-enabled')

    cy.getByTestId('submit-basket').click();

    cy.getByTestId('submit-basket').should('have.class', 'btn-disabled')
  });
});
