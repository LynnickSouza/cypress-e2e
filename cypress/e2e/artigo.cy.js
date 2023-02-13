/// <reference types="cypress" />

import artigo from '../support/pages/artigo';
import routes from '../support/routes';

const user = Cypress.config().user;

context('Publicação de artigo', () => {
  beforeEach(() => {

    routes.init();
    cy.autenticacao(user.email, user.password);
    artigo.acessarFormulario();
  });
 
  it('Criação de uma nova publicação de artigo', () => {
    artigo.preencherFormulario();
    artigo.submeterArtigo();
    
    artigo.assertsArtigo();

    //PAV  - PREPRAÇÃO - AÇÃO - VALIDACOES
  })
});