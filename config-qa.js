const { defineConfig } = require("cypress");
const baseConfig = require("./cypress.config");
const e2e = {
  baseUrl: process.env.BASE_URL,
  env: {
    username: process.env.USER,
    password: process.env.PASSWORD,
  },
};

module.exports = defineConfig({
  ...baseConfig,
  e2e,
});
