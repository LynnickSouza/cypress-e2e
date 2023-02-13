const elements = require('./elements').ELEMENTS

class Cadastro {

  acessarRegistro() {
    cy.visit('register');
  }

  preencherFormulario(usuario, email, password) {
    cy.get(elements.usuario).type(usuario);
    cy.get(elements.email).type(email);
    cy.get(elements.senha).type(password);
    cy.get(elements.usuario).should('be.visible')
    cy.get(elements.email).should('be.visible')
    cy.get(elements.senha).should('be.visible')
  }
  
  submeterFormulario() {
    cy.get(elements.botaoSubmeter).should('be.visible')
    cy.get(elements.botaoSubmeter).click();
  }

  assertsCadastro() {
    cy.get(elements.feed).should('be.visible')
  }

}
export default new Cadastro();