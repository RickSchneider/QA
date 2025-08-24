import { elements as el } from "./elements";
class Header {
  validarItensDeCarrinho(quantidade) {
    cy.get(el.cartBadge)
      .should("be.visible")
      .and("have.text", quantidade.toString());
  }
  goToCart() {
    cy.get(el.cartContainer).click();
  }
}
export default new Header();
