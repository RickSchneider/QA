import login from "../pages/login";
import Inventory from "../pages/inventory";
import Header from "../pages/header";
import Cart from "../pages/cart";
describe("Carrinho", () => {
  beforeEach(() => {
    // Arrange
    login.visitarPagina();
    login.loginValido();
    Inventory.validarAcessoPagina();
  });

  it("Adicionar produto ao carrinho com sucesso", () => {
    // Act
    const qtdItensAdicionados = 1;
    Inventory.adicionarProduto("Sauce Labs Backpack");

    // Assert

    Header.validarItensDeCarrinho(qtdItensAdicionados);
    Header.goToCart();
    Cart.validarProdutoNoCarrinho("Sauce Labs Backpack");
  });

  it("Remover produto do carrinho com sucesso", () => {
    // Act
    Inventory.adicionarProduto("Sauce Labs Backpack");
    Inventory.removeProduto("Sauce Labs Backpack");

    // Assert
    //Header.ValidarCarrinhoSemItem();
  });
});
