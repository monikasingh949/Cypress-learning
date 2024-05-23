describe("Test case to check register functionality", () => {
  beforeEach(() => {
    cy.visit("https://www.woolworths.com.au/");
  });
  it("should register a new user successfully", () => {
    cy.get('button[class*="wx-header__drawer-button signIn"]').click();
    cy.get("#sign-up-link").contains("Sign up here").click();
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
    cy.get('button[class*="wx-header__drawer-button signIn"]').click();
    cy.get("#sign-up-link").contains("Sign up here").click();
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
});
