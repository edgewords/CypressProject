describe('Admin Login', function() {
    Cypress.config('baseUrl','http://www.edgewordstraining.co.uk/webdriver2')

    beforeEach(function() {
        // load example.json fixture file and store
        // in the test context object
        cy.fixture('loginData').as('data')
      })

    it.only('Successful Login', function(){
        cy.visit ('/')
        //cy.login(this.data.username, this.data.password) 
        cy.login (Cypress.env('username'), Cypress.env('password'))
        cy.wait(1000)
        //cy.window().then(win => win.submitLogin()) //invoke the login javascript function directly
        //cy.contains('Submit').click()
        //error 404 occurs here
        //cy.visit ('/sdocs/add_record.php') //Had to add this as Cypress changes the URL from the form submit for some reason!
        cy.get('body').contains('User is Logged in').should('exist')
        cy.getCookie('user').should('have.property', 'value', 'edgewords')
        //Logout
        cy.contains('Log Out').click()
        //Handle the confirmation Alert
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Do You Really want to Exit the Secure site! Press ok to Continue ')
        })
        cy.get('body').contains('User was Logged in').should('exist')
    });

    it('Failed Login', function(){
        cy.visit ('/')
        cy.login('edgewords','edgewords999') //Call our login command with a bad password
        //Handle the confirmation Alert
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Failed to Login : ')
        })
        cy.get('body').contains('User is not Logged in').should('exist')
    });
});