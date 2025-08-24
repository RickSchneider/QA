class Inventory {
  validarAcessoPagina() {
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

    cy.screenshot("Acesso a página de inventário");
  }
}

export default new Inventory();
