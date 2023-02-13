class Routes {

  alias = {
    postArticles: 'PostArticles',
    getArticlesTitle: 'GETArticlesTitle',
    getArticlesTitleComments: 'GETArticlesTitleComments'
  }

  init() {
    cy.server()
    cy.route('POST', '**/api/articles').as(this.alias.postArticles)
    cy.route('GET', '**/api/articles/Mozilla5.0-**-**-**-**').as(this.alias.getArticlesTitle)
    cy.route('GET', '**/api/articles/**/comments').as(this.alias.getArticlesTitleComments)
  }
}
export default new Routes();