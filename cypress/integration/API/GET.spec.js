describe('GET Methods', function () {
    it('Get some products', function () {
        cy.request('GET','http://localhost:2002/api/products/1').then((response)=>{
            expect(response.status).equal(200);
            expect(response.duration).to.not.be.greaterThan(1000) //msec
            expect(response.body).property('name').to.equal('iPad');
            expect(response.body).property('price').to.be.a('number').and.to.equal(500)
            });
    });

    
    it('Get Users with Auth', function () {
        let options={
            url: 'http://localhost:2002/api/users',
            method: 'GET',
            auth: {'user':'edge','pass':'edgewords','sendImmediately': true}
        }
        cy.request(options).then((response)=>{
                expect(response.status).equal(200);
                })
    });
});