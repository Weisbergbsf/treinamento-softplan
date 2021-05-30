// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Artigos', () => {
    it('Criar um novo artigo', () => {
        cy.login()



        cy.get('a[href$=editor]').click();
        cy.get('input[placeholder="Article title"]').type('Avengers Endgame');
        cy.get('input[placeholder="What is this article about?"]').type('Avengers Movie');
        cy.get('form textarea').type('Avengers is a great movie');
        cy.get('input[placeholder="Enter tags"]').type('avengers');
        cy.get('button.btn-primary').type('Publish article').click();

        cy.get('h1').should('contain.text', 'Avengers Endgame');

    });

});
