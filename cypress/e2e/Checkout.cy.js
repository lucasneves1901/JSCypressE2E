/// <reference types="Cypress" />

describe('Checkout Process', () => {
  it('Successful Checkout', function () {
    cy.fixture('users.json').then(function (users) {
      cy.LogIn(users.standard.username, users.standard.password);
      cy.get('[data-test="shopping-cart-link"]').should('be.visible');
      cy.AddToCart('backpack');
      cy.Cart('backpack');
      cy.Checkout();
      cy.get('[data-test="complete-header"]').should('be.visible').should('have.text', 'Thank you for your order!');
    });
  });
});
