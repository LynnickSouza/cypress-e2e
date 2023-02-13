import { faker } from '@faker-js/faker';
import routes from '../../routes';

const elements = require('./elements').ELEMENTS

class Artigos {

  acessarFormulario() {
    cy.get(elements.linkPublicacao).should('be.visible')
    cy.get(elements.linkPublicacao).click();
  }

  preencherFormulario() {
    cy.get(elements.tituloArtigo).type(faker.internet.userAgent());
    cy.get(elements.descricaoArtigo).type(faker.internet.url());
    cy.get(elements.informacoesArtigo).type(faker.lorem.lines());
    cy.get(elements.tagArtigo).type('cypress');
    cy.get(elements.tituloArtigo).should('be.visible')
    cy.get(elements.descricaoArtigo).should('be.visible')
  }

  submeterArtigo() {
    cy.get(elements.botaoSubmeter).should('be.visible')
    cy.get(elements.botaoSubmeter).click();
  }

  assertsArtigo() {
    cy.wait(`@${routes.alias.postArticles}`).then((postArticlesResponse) => {
      expect(postArticlesResponse.status).to.eql(200)
    })

    cy.wait(`@${routes.alias.getArticlesTitle}`).then((getArticlesTitleResponse) => {
      expect(getArticlesTitleResponse.status).to.eql(200)
    })

    cy.wait(`@${routes.alias.getArticlesTitleComments}`).then((getArticlesTitleCommentsResponse) => {
      expect(getArticlesTitleCommentsResponse.status).to.eql(200)
    })
  }

}
export default new Artigos();