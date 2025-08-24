import login from "../pages/login";
import inventory from "../pages/inventory";
describe("Login", () => {
  beforeEach(() => {
    // Arrange
    login.visitarPagina();
  });
  it("Login com credenciais certas", () => {
    login.loginValido();
    inventory.validarAcessoPagina();
  });

  it("Realizar login informando credenciais inválidas", () => {
    // Act
    login.credenciaisInvalidasPreencher();
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
