/// <reference types="Cypress" />

describe('Login Functionality', () => {
  it('Login with valid credentials', function () {
    cy.fixture('users.json').then(function (users) {
      cy.LogIn(users.standard.username, users.standard.password);
      cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    });
  });

  it('Failed Login', function () {
    cy.fixture('users.json').then(function (users) {
      cy.LogIn(users.locked.username, users.locked.password);
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
  });
});
