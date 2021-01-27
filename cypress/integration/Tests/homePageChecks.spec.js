
describe('Home Page', function() {

    beforeEach(function() {
      cy.visit('/')
      cy.title().should('eq', 'Edgewords Shop – e-commerce demo site for Training')
      cy.get('.woocommerce-store-notice__dismiss-link').click() //remove warning from bottom of page
    })

    it('successfully loads', function() {
      cy.visit('/my-account/#');
      cy.get("#username").should('be.visible')
    })

    it('successfully loads', function() { 
      cy.contains('account').click()
      cy.get('#woocommerce-product-search-field-0').type('cap{enter}')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.attachment-woocommerce_thumbnail').should('exist') //check cap icon exists in basket
      cy.get('.remove').click()
      cy.get('.cart-empty').should('exist')
      cy.contains('Return').click()
    })
  })