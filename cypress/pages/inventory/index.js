import { baseInfo as bi } from "../../fixtures/baseInfo";
import { elements as el } from "./elements";
class Inventory {
  validarAcessoPagina() {
    cy.url().should("eq", bi.urlInventory);
    cy.screenshot("Acesso a página de inventário");
  }
  adicionarProduto(itemName) {
    cy.get(el.addToCart(itemName)).click();
  }
}

export default new Inventory();
