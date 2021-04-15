// write tests here

describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234')
    })

    it('sanity checks', () => {
        expect(10).to.equal(10)
        expect(1 + 2).to.equal(3)
        expect({}).to.eql({}) // deep equals, comparing properties
        expect(1 + 2).to.equal(4-1) // does this work?
    })

})