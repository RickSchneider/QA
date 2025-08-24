import { baseInfo as bi } from "../../fixtures/baseInfo";
import { elements as el } from "./elements";
class Login {
  visitarPagina() {
    cy.visit(bi.urlLogin);
  }
  loginValido() {
    cy.get(el.username).type(Cypress.env("username"));
    cy.get(el.password).type(Cypress.env("password"));
    cy.get(el.loginButton).click();
  }
  usernameInvalido() {
    cy.get(el.username).type("invalid");
    cy.get(el.password).type(Cypress.env("password"));
    cy.get(el.loginButton).click();
  }
  passwordInvalido() {
    cy.get(el.username).type(Cypress.env("username"));
    cy.get(el.password).type("senha");
    cy.get(el.loginButton).click();
  }
  credenciaisInvalidasPreencher() {
    cy.get(el.username).type("invalid");
    cy.get(el.password).type("senha");
    cy.get(el.loginButton).click();
  }
  validarErroLogin() {
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match any user in this service"
    );
    cy.url().should("eq", bi.urlLogin);
  }
  validarAcessoPagina() {
    cy.url().should("eq", bi.urlInventory);
    cy.screenshot("Acesso a página de inventário valido");
  }
}

export default new Login();
