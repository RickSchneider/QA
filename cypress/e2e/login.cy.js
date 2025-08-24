import login from "../pages/login";
import inventory from "../pages/inventory";
describe("Login", () => {
  beforeEach(() => {
    // Arrange
    login.visitarPagina();
    login.loginValido();
    inventory.validarAcessoPagina();
  });

  it("Realizar login informando credenciais inválidas", () => {
    // Act
    login.credenciaisInvalidasPreencher();

    // Assert
    login.validarErroLogin();
  });
  it("Realizar login com usuário certo e senha errada", () => {
    login.passwordInvalido();
    login.validarErroLogin();
  });
  it("Realizar login com usuário errado e senha certa", () => {
    login.usernameInvalido();
    login.validarErroLogin();
  });
});
