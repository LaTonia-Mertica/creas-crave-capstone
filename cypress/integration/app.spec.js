describe("Creas Crave eCommerce Shop", () => {
  it("should visit creas crave webpage", () => {
    cy.visit("http://localhost:3000/Creas-Crave-Capstone");
    cy.get(".btn").debug();
    cy.get(".form-control.me-2").type("Main Top Video");
    cy.get("[data-cy=search-submit]").click();
    // cy.get("[data-cy=buy-main-vid]").contains("BUY NOW").click();
  });
});
