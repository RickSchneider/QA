import Login from "../pages/login";
import inventory from "./inventory";
describe("Carrinho", () => {
  beforeEach(() => {
    // Arrange
    Login.visitarPagina();
    Login.credenciaisValidasPreencher();
  });

  it("Adicionar produto ao carrinho com sucesso", () => {
    // Act
    inventory.adicionarProduto("Sauce Labs Backpack");

    // Assert
    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1");

    cy.get("#shopping_cart_container").click();

    cy.contains("Sauce Labs Backpack").should("be.visible");

    cy.screenshot("produto adicionado");
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
