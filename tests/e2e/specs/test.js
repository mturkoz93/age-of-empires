// https://docs.cypress.io/api/introduction/api.html

describe("Home Page", () => {
  it("Visits the app home page", () => {
    cy.visit("/");
    cy.get("img").should("be.visible");
    cy.get("img").should("have.attr", "src").should("include", "wallpaper");

    cy.get("img").click();
  });

  it("/units url", () => {
    cy.visit("/units");

    cy.contains("Units");
    cy.contains("Ages");

    describe("Age Filter Buttons", () => {
      cy.get("div").contains("All").click();
      cy.get("div").contains("Dark").click();
      cy.get("div").contains("Feudal").click();
      cy.get("div").contains("Castle").click();
      cy.get("div").contains("Imperial").click();
    });
  });

  it("/units/2 url", () => {
    cy.visit("/units/2");

    cy.get(".unit-section-title").contains("Crossbowman Details");
  });

  it("/units/44 url", () => {
    cy.visit("/units/44");

    cy.get(".unit-section-title").contains("Turkey Details");
  });
});
