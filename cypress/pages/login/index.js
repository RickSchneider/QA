import { baseInfo as bi } from "../../fixtures/baseInfo";
import { elements as el } from "./elements";
class Login {
  visitarPagina() {
    cy.visit(bi.urlLogin);
  }
  loginValido() {
    cy.get(el.username).type("standard_user");
    cy.get(el.password).type("secret_sauce");
    cy.get(el.loginButton).click();
  }

  usernameInvalido() {
    cy.get(el.username).type("invalid");
    cy.get(el.password).type("secret_sauce");
    cy.get(el.loginButton).click();
  }
  passwordInvalido() {
    cy.get(el.username).type("standard_user");
    cy.get(el.password).type("senha");
    cy.get(el.loginButton).click();
  }
  credenciaisInvalidasPreencher() {
    cy.get(el.password).type("secret_sauce");
  }
  clickLoginButton() {}
  validarErroLogin() {
    cy.get(errorText).should(
      "contain.text",
      "Username and password do not match any user in this service"
    );
    cy.url().should("eq", bi.urlLogin);
  }
}

export default new Login();
