/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const zipCode = faker.location.zipCode('####');

Cypress.Commands.add('LogIn', (user, psswd) => {
  cy.visit('/');
  cy.get('[data-test="username"]').type(user);
  cy.get('[data-test="password"]').type(psswd, { log: true });
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('Checkout', () => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(zipCode);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
});

Cypress.Commands.add('AddToCart', (product) => {
  cy.get(`[data-test="add-to-cart-sauce-labs-${product}"]`).click();
  cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1').click();
});

Cypress.Commands.add('Cart', (product) => {
  cy.get('[data-test="inventory-item-name"]').contains(`Sauce Labs ${product}`, { matchCase: false });
  cy.get('[data-test="checkout"]').click();
});

Cypress.Commands.add('RemoveFromCart', (product) => {
  cy.get(`[data-test="remove-sauce-labs-${product}"]`).click();
});
