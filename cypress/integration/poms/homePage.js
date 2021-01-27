class homePage {
    visit() {return cy.visit('https://www.edgewordstraining.co.uk/webdriver2/sdocs/auth.php')}
    getUsername() { return cy.get('#username'); }
    getPassword() { return cy.get('#password'); }
    typeUsername(username){
        this.getUsername().clear().type(username)
    }
    typePassword(password){
        this.getPassword().clear().type(password)
    }
    clickSubmit() {
        cy.contains('Submit').click();
        return this;
    }
    loginUser(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickSubmit();
    }
}
export default homePage