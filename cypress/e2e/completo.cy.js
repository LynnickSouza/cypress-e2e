/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'
import artigo from '../support/pages/artigo';
import routes from '../support/routes';
import faker from '@faker-js/faker'

const user = Cypress.config().user;
const usuario = faker.name.firstName()
const email = faker.internet.email()

describe('Cadastro e login e publicação de artigo', () => {
  beforeEach(() => {

    routes.init();
  });

  it('Cadastro de um novo usuário', function () {
    cadastro.acessarRegistro()
    cadastro.preencherFormulario(usuario + 'cypress', email, user.password)
    cadastro.submeterFormulario()
  });

  it('Criar uma nova publicação', () => {
    artigo.acessarFormulario();
    artigo.preencherFormulario();
    artigo.submeterArtigo();
    artigo.assertsArtigo();
  })

});
