describe("Displaying home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render", () => {});

  it("should contains a main title", () => {
    cy.contains("Hello");
  });

  it("should increment counter", () => {
    cy.getByData("count-display").contains(0);

    cy.getByData("count-incrementer").click();
    cy.getByData("count-display").contains(1);

    cy.getByData("count-incrementer").click();
    cy.getByData("count-incrementer").click();
    cy.getByData("count-display").contains(3);
  });
});
