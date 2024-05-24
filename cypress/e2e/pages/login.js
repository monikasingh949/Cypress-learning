import { loginAndSignUpHeader } from "./objects/home.locators";
import * as login from "./objects/login.locators";
// login
export const AuthenticateUser = (userEmail, userPassword) => {
  cy.get(loginAndSignUpHeader).click();
  cy.get(login.userEmailLocator).type(userEmail);
  cy.get(login.userPasswordLocator).type(userPassword);
  cy.get(login.submitButtonLocator).click();
};
