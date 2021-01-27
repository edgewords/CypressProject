describe('POST Methods', function () {
    it('Create a new product', function () {
        cy.request('POST','http://localhost:2002/api/products', {
                "name": "PC",
                "price": 250
            }).its('body').as('newProduct').then(function () {
            // When this callback runs, both "cy.request" API commands have finished
            // Let's verify them.
                expect(this.newProduct, 'check product has correct name')
                .property('name')
                .to.equal('PC')
                })
            });
});