import { visitHomePage } from "../utils";
import * as login from "../pages/login";
import * as loginLocator from "../pages/objects/login.locators";
import { loginAndSignUpHeader } from "../pages/objects/home.locators";

describe("Login Functionality", () => {
  beforeEach(() => {
    // visit and sign in function call
    visitHomePage();
  });
  it("should login successfully with valid credentials", () => {
    // login with valid credenctials
    login.AuthenticateUser("rihef83861@godsigma.com", "passwordtest");
  });
  it("should show error message for invalid credentials", () => {
    login.AuthenticateUser("rihef83861@godsigma.com", "passwordt");
    cy.contains("The login was not successful.").should("be.visible");
    cy.contains(
      "Sorry we are experiencing some difficulties. Please try again."
    ).should("be.visible");
  });

  it("should show validation errors for empty fields", () => {
    cy.get(loginAndSignUpHeader).click();
    cy.get(loginLocator.submitButtonLocator).click();
    cy.contains("Email address is required.").should("be.visible");
    cy.contains("Password is required.").should("be.visible");
  });
  it("should show validation errors for invalid email address", () => {
    login.AuthenticateUser("rrihef83861@godsigma", "passwordtestt");
    cy.contains("The login was not successful.").should("be.visible");
  });
});
