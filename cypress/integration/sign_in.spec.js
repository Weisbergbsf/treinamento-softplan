describe('Autenticação', () => {
    it('Efetuar login com usuário e senha válidos', () => {
        //username: "Fulano"
        //email: "fulano@gmail.com"
        //pw senhafulano
        cy.visit('/');
        //cy.get('.nav-link').contains('Sign in').click()
        // OU
        cy.get('[href*=login]').click();

        const { email, password } = Cypress.env('user');
        cy.get('input[type=email]').type(email);
        cy.get('input[type=password]').type(password);
        //cy.get('button[type=button].btn-primary').click()
        // OU
        cy.get('button.btn-primary').click()

        cy.get('.nav-pills a.nav-link')
            .should('have.length', 2)

        cy.get('.nav-pills a.nav-link')
            // posicao - eq(0), first, last
        .eq(0)
        .should('contain.text', 'Your Feed');

    });
});