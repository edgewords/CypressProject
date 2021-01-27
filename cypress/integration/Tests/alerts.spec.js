describe('To Handle Alerts', function() {
    Cypress.config('baseUrl','http://www.edgewordstraining.co.uk/training-site/');
    it('shows alerts and catches text', function() {
        cy.visit('/dynamicContent.html')
        cy.title().should('eq','Automated Tools Test Site')
        cy.pause()
        cy.get('[onclick="javascript\:causeAlert\(\)\;return false\;"]').click()
        // now let's capture the message from the Alert manually
        //in order to check the message displayed
        cy.on('window:alert', (str) => {
            expect(str).to.equal('This is an alert!')
        });
    });
});