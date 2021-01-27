describe('Home-Page', function() {

    it('successfully loads', function() {
      cy.visit('https://www.edgewordstraining.co.uk/demo-site')
      cy.title().should('eq','Edgewords Shop – e-commerce demo site for Training')
    })

})
