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
        it('can type inside the text input', () => {
            textInput()
            .should('have.value', '')
            .type('Be kind to yourself and others')
            .should('have.value', 'Be kind to yourself and others')
        })
        // can type inside the author input
        it('can type inside the author input', () => {
            authorInput()
            .should('have.value', '')
            .type('Frank Herbert')
            .should('have.value', 'Frank Herbert')
        })

        it('the submit button enables if we type into both inputs', () => {

            submitButton().should('not.be.enabled')
            // type in text input
            textInput().type('foo')
            // type in author input
            authorInput().type('bar')
            // select submit button --- ('not.be.disabled')
            submitButton().should('be.enabled')
        })

        it("the cancel button can rest the inputs and disable the submit button", () => {
            textInput().type("I like Chocolate Milk");
            authorInput().type("Cheez");
            cancelBtn().click();
            textInput().should("have.value", "");
            authorInput().should("have.value", "");
            submitButton().should("be.disabled");
          });
    })

})