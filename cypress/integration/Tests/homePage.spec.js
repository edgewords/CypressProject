
import HomePage from '../poms/homePage.js';

describe('LoginTest', function () {

    const homePage = new HomePage(); //Create the POM Object

    it('Should Login Successfully', function () {
        homePage.visit();
        homePage.loginUser('edgewords','edgewords123')
        cy.get('body').contains('User is Logged in').should('exist')
    });
});