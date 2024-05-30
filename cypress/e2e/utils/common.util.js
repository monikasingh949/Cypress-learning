import { baseUrl } from "../const/consts";

// visit home page
export const visitHomePage = () => {
  cy.visit(baseUrl);
};
