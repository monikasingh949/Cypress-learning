import { visitHomePage } from "../utils";
import * as searchLocator from "../pages/objects/search.locators";
import * as search from "../pages/search";
describe("Search Functionality", () => {
  beforeEach(() => {
    // visit and sign in function call
    visitHomePage();
  });
  it("should display results for a valid search term", () => {
    search.searchItem("fruit");
    cy.url().should("include", (searchLocator.searchedItemUrl = "fruit"));
    cy.xpath(searchLocator.searchXpath)
      .contains("Showing results for ")
      .should("be.visible");
    cy.get(searchLocator.searchTitleLocator).should("contain", "fruit");
  });
  it("should display no results message for a search term with no matches", () => {
    search.searchItem("donotexist");
    cy.url().should("include", (searchLocator.searchedItemUrl = "donotexist"));
    cy.get(searchLocator.searchTitleLocator).should("not.exist");
  });
});
