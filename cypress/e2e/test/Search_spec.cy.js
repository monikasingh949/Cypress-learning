describe("Search Functionality", () => {
  beforeEach(() => {
    cy.visit("https://www.woolworths.com.au/");
  });
  it("should display results for a valid search term", () => {
    cy.get('input[name="headerSearch"]').type("fruit");

    cy.get("#wx-button-header-search-find").click();

    cy.url().should("include", "/shop/search/products?searchTerm=fruit");

    cy.xpath("//h3[@class='searchContainer-title ng-star-inserted']")
      .contains("Showing results for ")
      .should("be.visible");
    cy.get(".searchContainer-title").should("contain", "fruit");
  });
  it("should display no results message for a search term with no matches", () => {
    cy.get('input[name="headerSearch"]').type("donotexist");
    cy.get("#wx-button-header-search-find").click();

    cy.url().should("include", "/shop/search/zeroresult?searchTerm=donotexist");
    //  cy.contains('Sorry, we couldn\'t find results for "donotexist"').should(
    //       "be.visible"
    //     );
    cy.get(".searchContainer-title").should("not.exist");
  });
});
