import { elements as el } from "./elements";
class Header {
  validarItensDeCarrinho(quantidade) {
    cy.get(el.cartBadge)
      .should("be.visible")
      .and("have.text", quantidade.toString());
  }
  goToCart() {
    cy.get(el.cartBadge).click();
  }
  ValidarCarrinhoSemItem() {
    cy.get(el.cartBadge).should("not.exist");
    cy.screenshot("produto removido");
  }
}
export default new Header();
