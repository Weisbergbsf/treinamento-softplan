// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//URL: https://conduit.productionready.io/api
//rote: /users/login

Cypress.Commands.add('login', () => {

    const apiUrl = Cypress.env('apiUrl');
    const { email, password } = Cypress.env('user');

    cy.request({
        method: 'POST',
        url: `${apiUrl}/users/login`,
        body: { "user": { "email": email, "password": password } },
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
        },
    }).then(response => {
        localStorage.setItem('token', response.body.user.token)
    });

    cy.visit('/');

    cy.get('.nav-pills a.nav-link')
        .should('have.length', 2)

    cy.get('.nav-pills a.nav-link')
        // posicao - eq(0), first, last
        .eq(0)
        .should('contain.text', 'Your Feed');
})