// write tests here

// our testing suite

describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234')
    })

    it('sanity checks', () => {
        expect(10).to.equal(10)
        expect(1 + 2).to.equal(3)
        expect({}).to.eql({}) // deep equals, comparing properties
        expect(1 + 2).to.equal(4-1) // does this work?

        // expect(myFunc(foo)).to.be(100)
    })

    const textInput = () => cy.get('input[name="text"]')
    const authorInput = () => cy.get('[name="author"]')
    const submitButton = () => cy.get('#submitBtn')
    const cancelBtn = () => cy.get('button[id="cancelBtn"]')

    it('has the proper elements', () => {
        textInput().should('exist')
        authorInput().should('exist')
        submitButton().should('exist')
        cancelBtn().should('exist')
    })

    describe('filling out inputs and cancelling', () => {
        it('can type inside the inputs', () => {
            textInput()
            .should('have.value', '')
            .type('Be kind to yourself and others')
            .should('have.value', 'Be kind to yourself and others')
        })
    })

})