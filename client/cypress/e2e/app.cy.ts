/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

describe("Portfolio App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders", () => {
    cy.contains("Portfolio").should("exist");
  });

  it("navigate to About page", () => {
    cy.contains("About").click();
    cy.contains("이 강철").should("exist");
  });

  it("navigate to Projects page", () => {
    cy.contains("Projects").click();
    cy.contains("주요 기능").should("exist");
  });

  it("navigate to Skills page", () => {
    cy.contains("Skills").click();
    cy.url().should("include", "/skills");
  });

  it("navigate to Contact page", () => {
    cy.contains("Contact").click();
    cy.contains("goddemi0124@gmail.com").should("exist");
  });
});
