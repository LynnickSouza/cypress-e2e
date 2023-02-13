const elements = require('./elements').ELEMENTS

class Login {

  acessarLogin() {
    cy.visit('login');
  }
  
  preencherFormulario(email, password) {
    cy.get(elements.email).type(email)
    cy.get(elements.senha).type(password)
    cy.get(elements.email).should('be.visible')
    cy.get(elements.senha).should('be.visible')
  }

  submeterFormulario() {
    cy.get(elements.botaoSubmeter).should('be.visible')
    cy.get(elements.botaoSubmeter).click();
  }

  assertsLogin() {
    cy.get(elements.feed).should('be.visible')
  }
}
export default new Login();