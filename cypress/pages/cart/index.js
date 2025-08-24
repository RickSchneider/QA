import { elements as el } from "./elements";
class Cart {
  validarProdutoNoCarrinho(name) {
    cy.contains(name).should("be.visible");
    cy.screenshot("produto adicionado");
  }
}
export default new Cart();
