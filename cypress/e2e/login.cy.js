//describe informa o contexto do teste
describe("Login", () => {
  //pra indicar que será feito um teste usamos it, tudo o que tiver dentro do escopo desse it, é um bloco de test
  it("Realizar login com sucesso", () => {
    //Arrange -
    //cy.visit vai acessar a url informada
    cy.visit("https://www.saucedemo.com");

    //Act
    //cy.get vai pegar o nome do elemento que vamos interagir, o type vai escrever o texto entre " "dentro desse elemento
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    //Assert - Validação
    //valida se a URL, deve, eq (equal) link
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });
  //quando usando o .only, vai testar apenas esse it, os demais não vão ser executadas
  it("Realizar login informando credenciais invalidas", () => {
    //Arrange
    cy.visit("https://www.saucedemo.com");
    //Act
    cy.get('[data-test="username"]').type("invalid");
    cy.get('[data-test="password"]').type("senha");
    cy.get('[data-test="login-button"]').click();
    //Assert - Validação
    //.should = deve (conter o texto, texto que precisa conter)
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match any user in this service"
    );
    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});
