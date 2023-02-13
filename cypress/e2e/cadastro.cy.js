/// <reference types="cypress" />
import faker from '@faker-js/faker'
import cadastro from '../support/pages/cadastro'

const usuario = faker.name.firstName()
const email = faker.internet.email()
const user = Cypress.config().user;


describe('Cadastro', () => {
  it('Cadastrar um novo usuário', function () {
    cadastro.acessarRegistro()
    cadastro.preencherFormulario(usuario + 'cypress', email, user.password)
    cadastro.submeterFormulario()
    cadastro.assertsCadastro()
  });
});
