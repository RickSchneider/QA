import login from "../pages/login";
import inventory from "../pages/inventory";
import Header from "../pages/header";
import Cart from "../pages/cart";
describe("Carrinho", () => {
  beforeEach(() => {
    // Arrange
    login.visitarPagina();
    login.loginValido();
    inventory.validarAcessoPagina();
  });

  it("Adicionar produto ao carrinho com sucesso", () => {
    // Act
    const qtdItensAdicionados = 1;
    inventory.adicionarProduto("Sauce Labs Backpack");

    // Assert

    Header.validarItensDeCarrinho(qtdItensAdicionados);
    Header.goToCart();
    Cart.validarProdutoNoCarrinho(name);
  });

  it("Remover produto do carrinho com sucesso", () => {
    // Arrange
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get(".shopping_cart_badge").should("be.visible");

    // Act
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    // Assert
    cy.get(".shopping_cart_badge").should("not.exist");

    cy.screenshot("produto removido");
  });
});
