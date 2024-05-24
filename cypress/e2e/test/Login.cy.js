import { visitHomePage } from "../utils";
import * as login from "../pages/login";

describe("Login Functionality", () => {
  beforeEach(() => {
    // visit and sign in function call
    visitHomePage();
  });
  it("should login successfully with valid credentials", () => {
    // login with valid credenctials
    login.AuthenticateUser("rihef83861@godsigma.com", "passwordtest");
  });
  // it("should show error message for invalid credentials", () => {
  //   login.AuthenticateUser();
  //   cy.contains("The login was not successful.").should("be.visible");
  // cy.contains(
  //   "The email address & password combination you have entered is incorrect.  Please try again or click the forgotten password link below to reset your password."
  // ).should("be.visible");
  // });

  // it("should show validation errors for empty fields", () => {
  //   cy.get('button[type="submit"]').click();
  //   cy.contains("Email address is required.").should("be.visible");
  //   cy.contains("Password is required.").should("be.visible");
  // });
  // it("should show validation errors for invalid email address", () => {
  //   cy.get("#signInForm-email").type("rrihef83861@godsigma");
  //   cy.get("#signInForm-password").type("passwordtestt");
  //   cy.get('button[type="submit"]').click();
  //   cy.contains("The login was not successful.").should("be.visible");
  // });
});
