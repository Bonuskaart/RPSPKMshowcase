const url = 'https://localhost:7158/Home/Battleview';




context('Title', () => {
    const userEmail = 'jens@jens.nl'; // Replace with your actual email
    const userPassword = 'P@ssword1'; // Replace with your actual password

    beforeEach(() => {
        cy.visit(url);

        // Login using form elements
        cy.get('#account').within(() => {
            cy.get('[name="Input.Email"]').type(userEmail);
            cy.get('[name="Input.Password"]').type(userPassword);
            cy.get('button[type="submit"]').click();
        });

    });

    it('Page title should contain text "Battle!"', () => {
        cy.get('steenpapierschaar-app')
            .shadow()
            .find('[data-cy="page-title"]')
            .should('have.text', 'Battle!')
    })


    it('After DOM connected tile has img element', () => {
        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-111')
            .shadow()
            .find('img')
            .should('be.visible')
            .should('not.have.class', 'selected')
    })

});
