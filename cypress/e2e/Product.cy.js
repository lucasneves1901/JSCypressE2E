/// <reference types="Cypress" />

describe('Product Interactions', () => {
  it('Adding Products from Cart', function () {
    cy.fixture('users.json').then(function (users) {
      cy.LogIn(users.standard.username, users.standard.password);
      cy.get('[data-test="shopping-cart-link"]').should('be.visible');
      cy.AddToCart('backpack');
      cy.Cart('backpack');
      cy.Checkout();
    });
  });

  it('Removing Products from Cart', function () {
    cy.fixture('users.json').then(function (users) {
      cy.LogIn(users.standard.username, users.standard.password);
      cy.get('[data-test="shopping-cart-link"]').should('be.visible');
      cy.AddToCart('onesie');
      cy.RemoveFromCart('onesie');
    });
  });
});
