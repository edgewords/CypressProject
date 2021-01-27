describe('webtable', function () {
    it('capture by text', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
        cy.get('#textInput').clear()
        cy.get('#textInput').type('John')
        cy.get('#textArea').clear()
        cy.get('#textArea').type('Smith')
        cy.get('#theForm').contains('Submit').click()
        // Now lets check the web table
        cy.get('.htmlTable').contains('John').should('be.visible')
        cy.get('.htmlTable').contains('td','John').should('exist')
        cy.get('.htmlTable>tbody>tr:nth-child(2)>td:nth-child(3)').contains('John').should('exist')
    });
});