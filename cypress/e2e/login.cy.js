import Login from "../pages/login";
import inventory from "../inventory";
describe("Login", () => {
  beforeEach(() => {
    // Arrange
    Login.visitarPagina();
  });

  it("Realizar login com sucesso", () => {
    // Act
    Login.credenciaisValidasPreencher();

    // Assert
    inventory.validarAcessoPagina();
  });

  it("Realizar login informando credenciais inválidas", () => {
    // Act
    Login.credenciaisInvalidasPreencher();

    // Assert
    Login.validarErroLogin();
  });
});
