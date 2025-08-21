module.exports = {
  //desabilita algumas funções de segurança do navegador, evitando alguns erros de "cross-origin (Quando uma página da web tenta acessar recursos de um domínio, protocolo ou porta diferente, é considerada uma solicitação de origem cruzada."
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
