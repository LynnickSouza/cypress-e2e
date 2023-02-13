Cypress.Commands.add('autenticacao', (email, password) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.config().apiUrl}users/login`,
    body: {
      user: {
        email: email,
        password: password
      }
    }
  }).then((response) => {
    cy.visit('/', {
      onBeforeLoad: (window) => {
        window.localStorage.setItem('jwtToken', response.body.user.token)
      }
    })
  })  
});