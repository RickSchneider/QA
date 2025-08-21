describe("Carrinho", () => {
  it("Adicionar produto ao carrinho com sucesso", () => {
    //Arrange
    cy.visit("https://www.saucedemo.com");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    //Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //usando o . seria para usar a classe do elemento
    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1");
    //usando o # seria para usar o id do elemento
    cy.get("#shopping_cart_container").click();
    //.contais usamos para validar se contem o texto "X" e que esse texto deve ser visivel
    cy.contains("Sauce Labs Backpack").should("be.visible");
    cy.get('[data-test="continue-shopping"]').click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-badge"')
      .should("be.visible")
      .and("have.text", "2");
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="cart-list"]')
      .should("contain.text", "Sauce Labs Backpack")
      .and("contain.text", "Sauce Labs Bike Light");

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="checkout"]').click();
    //checkout
    cy.get('[data-test="firstName"]').type("Otávio");
    cy.get('[data-test="lastName"]').type("Severino");
    cy.get('[data-test="postalCode"]').type("88047-350");
    cy.get('[data-test="continue"]').click();
    //pagamento
    cy.url().should("eq", "https://www.saucedemo.com/checkout-step-two.html");
    cy.get('[data-test="title"]')
      .should("be.visible")
      .and("contain.text", "Checkout: Overview");
    cy.get('[data-test="finish"]').click();
    //validação pagamento
    cy.url().should("eq", "https://www.saucedemo.com/checkout-complete.html");
    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("contain.text", "Thank you for your order!");
    cy.get('[data-test="back-to-products"]', { timeout: 10000 })
      .should("be.visible")
      .click();
  });
});
