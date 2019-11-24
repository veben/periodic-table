/// <reference types="Cypress" />
context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe("Periodic Table Cypress test", () => {
    it("Should have a title", () => {
      cy.get("h1")
        .should("have.text", "Periodic Table of Elements");
      cy.get(".periodic-table")
        .find('.element').should('have.length', 118);
      cy.get(".nonmetal").should('have.length', 7);
      cy.get(".halogen").should('have.length', 6);
      cy.get(".metalloid").should('have.length', 7);
      cy.get(".noble-gas").should('have.length', 7);
      cy.get(".alkali-metal").should('have.length', 6);
      cy.get(".alkaline-earth-metal").should('have.length', 6);
      cy.get(".post-transition-metal").should('have.length', 11);
      cy.get(".transition-metal").should('have.length', 38);
      cy.get(".lanthanide").should('have.length', 15);
      cy.get(".actinide").should('have.length', 15);
    });
  });
})
