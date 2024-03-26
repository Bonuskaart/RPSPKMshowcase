const url = 'https://localhost:7158/Home/Battleview';

context('Click', () => {
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

    it('Click on tile should mark tile selected', () => {

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-111')
            .shadow()
            .find('img')
            .click();

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-111')
            .shadow()
            .find('img')
            .should('have.class', 'selected')
    })

});


