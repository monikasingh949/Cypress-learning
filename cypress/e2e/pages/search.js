import * as searchLocator from "./objects/search.locators";
//search item on home page
export const searchItem = (item) => {
  cy.get(searchLocator.searchItemLocator).type(item);
  cy.get(searchLocator.searchButtonLocator).click();
};
