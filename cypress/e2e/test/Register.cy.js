describe("Test case to check register functionality", () => {
  beforeEach(() => {
    cy.visit("https://www.woolworths.com.au/");
    cy.get('button[class*="wx-header__drawer-button signIn"]').click();
    cy.get("#sign-up-link").contains("Sign up here").click();
  });
  it("should register a new user successfully", () => {
    // cy.get('button[class*="wx-header__drawer-button signIn"]').click();
    // cy.get("#sign-up-link").contains("Sign up here").click();
    cy.get("#signupForm-EmailAddress").type("xivepi2798@fincainc.com"); //dayimo1562@cgbird.com
    cy.get("#signupForm-password").type("passwordtest");
    cy.get("#signupForm-FirstName").type("Jane");
    cy.get("#signupForm-LastName").type("doe");
    cy.get('input[placeholder*="DD/MM/YYYY"]').type("22041990");
    //cy.get("#ng-star-inserted").type("0444446300");
    // cy.xpath(
    //   '//div[@id="signupForm-shopperDetailsContainer"]/fieldset/shared-textbox[4]/label'
    // ).type("0444446300");
    cy.get('input[name="MobilePhone"]').type("0444446200");
    //cy.get(".checkbox-box").click({ multiple: true });
    cy.xpath(
      '//div[@id="signupForm-shopperDetailsContainer"]/div[2]/shared-checkbox/div/div'
    ).click();
    cy.get(".button").contains("Submit").click();
    cy.get('input[name="EmailVerificationCode"]').type("517696");
    cy.get(".button").contains(" Create Account").click();
  });
  it("should show error for duplicate email or username", () => {
    // cy.get('button[class*="wx-header__drawer-button signIn"]').click();
    // cy.get("#sign-up-link").contains("Sign up here").click();
    cy.get("#signupForm-EmailAddress").type("dayimo1562@cgbird.com");
    cy.get("#signupForm-password").type("passwordtest");
    cy.get("#signupForm-FirstName").type("John");
    cy.get("#signupForm-LastName").type("doe");
    cy.get('input[placeholder*="DD/MM/YYYY"]').type("22041990");
    cy.get('input[name="MobilePhone"]').type("0444446300");
    cy.xpath(
      '//div[@id="signupForm-shopperDetailsContainer"]/div[2]/shared-checkbox/div/div'
    ).click();
    cy.get(".button").contains("Submit").click();

    cy.contains("The sign up was not successful.").should("be.visible");
    cy.contains("The entered email already exists").should("be.visible");
  });
  it("should display validation error for invalid email format", () => {
    // Enter an invalid email address

    cy.get("#signupForm-EmailAddress").type("dayimo1562@cgbir");
    cy.get("#signupForm-password").type("passwordtest");
    cy.get("#signupForm-FirstName").type("Jane");
    cy.get("#signupForm-LastName").type("doe");
    cy.get('input[placeholder*="DD/MM/YYYY"]').type("22041990");
    cy.get('input[name="MobilePhone"]').type("0444446300");
    cy.xpath(
      '//div[@id="signupForm-shopperDetailsContainer"]/div[2]/shared-checkbox/div/div'
    ).click();
    cy.get(".button").contains("Submit").click();
    cy.contains("The sign up was not successful.").should("be.visible");
    // Assert validation message is shown
    // Assuming the validation message is displayed as a sibling span or div with a specific class
    cy.contains(
      "Email address is required to be in format of example@example.com"
    ).should("be.visible");
  });
  it("should show validation errors for empty fields", () => {
    // Submit the form without filling it out
    // cy.get('button[class*="wx-header__drawer-button signIn"]').click();
    // cy.get("#sign-up-link").contains("Sign up here").click();
    cy.get('button[type="submit"]').click();

    // Verify validation errors are shown
    cy.contains("First name is required.").should("be.visible");
    cy.contains("Last name is required.").should("be.visible");
    cy.contains("Email address is required.").should("be.visible");
    cy.contains("Password is required.").should("be.visible");
    cy.contains("Date of birth is required.").should("be.visible");
    cy.contains("Mobile number is required.").should("be.visible");
  });
  it("Password length validation", () => {
    // Enter an invalid email address
    // cy.get('button[class*="wx-header__drawer-button signIn"]').click();
    // cy.get("#sign-up-link").contains("Sign up here").click();
    cy.get("#signupForm-EmailAddress").type("dayimo1562@cgbird.com");
    cy.get("#signupForm-password").type("passwo");
    cy.get("#signupForm-FirstName").type("John");
    cy.get("#signupForm-LastName").type("doe");
    cy.get('input[placeholder*="DD/MM/YYYY"]').type("22041990");
    cy.get('input[name="MobilePhone"]').type("0444446300");
    cy.xpath(
      '//div[@id="signupForm-shopperDetailsContainer"]/div[2]/shared-checkbox/div/div'
    ).click();
    cy.get(".button").contains("Submit").click();
    cy.contains("The sign up was not successful.").should("be.visible");
    cy.contains("Value must be 8 characters").should("be.visible");
  });
});
