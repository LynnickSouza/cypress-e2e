/// <reference types="cypress" />

import login from '../support/pages/login'
const user = Cypress.config().user;

context('Login', () => {
  it('Login com sucesso', () => {
    login.acessarLogin();
    login.preencherFormulario(user.email, user.password);
    login.submeterFormulario();
  });
});