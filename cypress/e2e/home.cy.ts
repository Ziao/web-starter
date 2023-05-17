describe("template spec", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000");
        cy.get("[data-cy='home-button']").click();
        cy.get("[data-cy='home-counter']").should("have.text", "1");
        cy.get("[data-cy='home-button']").click();
        cy.get("[data-cy='home-counter']").should("have.text", "2");
    });
});
