import { elements as el } from "./elements";
class Inventory {
  validarAcessoPagina() {
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

    cy.screenshot("Acesso a página de inventário");
  }
  adicionarProduto(itenName) {
    cy.get(el.addToCart(itenName)).click();
  }
}

export default new Inventory();
