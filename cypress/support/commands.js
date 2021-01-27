// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", function(email, password) {
        cy.get('div#right-column > h1').contains('Web Testing Index Page V2 Sprint2')
        cy.contains('Login').click()
        cy.get('body').contains('User is not Logged in').should('exist')
        cy.get('#username').clear()
        cy.get('#username').type(email)
        cy.get('#password').clear()
        cy.get('#password').type(password)
        cy.contains('Submit').click()
        })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
