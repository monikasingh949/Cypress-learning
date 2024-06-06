import { visitHomePage } from "../utils";
describe("Visuals", () => {
  it("should compare screenshot of the entire page", () => {
    visitHomePage();
    cy.get("#header-view-cart-button").click();
    cy.get("wow-side-cart-panel").compareSnapshot({
      name: "home-page-with-threshold",
      testThreshold: 0.3,
    });
  });
});
