// write tests here
describe( 'Quotes App', () => {
  beforeEach( () => {
    cy.visit( 'http://localhost:1234' );
  } )
  
  it ( 'sanity checks', () => {
    expect( 10 ).to.equal( 10 );
    expect( 1 + 2 ).to.equal( 3 );
    expect( {} ).to.eql( {} );
    expect( 1 + 2 ).to.equal( 4 - 1 );
  } );

  const textInput = () => cy.get( `input[name="text"]` );
  const authorInput = () => cy.get( `input[name="author"]` );
  const firstList = () => cy.get( `ul li` ).first();
  const firstEditBtn = () => firstList().find( 'button' ).first();
  const firstDeleteBtn = () => firstList().find( 'button' ).last();
  const lastList = () => cy.get( `ul li` ).last();
  const lastEditBtn = () => lastList().find( 'button' ).first();
  const lastDeleteBtn = () => lastList().find( `button` ).last();
  const submitBtn = () => cy.get( `button[id="submitBtn"]` );
  const cancelBtn = () => cy.get( `button[id="cancelBtn"]` );

  it( 'has the proper elements', () => {
    textInput().should( 'exist' );
    authorInput().should( 'exist' );
    firstEditBtn().should( 'exist' );
    cy.get( `button[data-cy="editBtn12"]` ).should( 'not.exist' );
    firstDeleteBtn().should( 'exist' );
    cy.get( `button[data-cy="deleteBtn12"]` ).should( 'not.exist' );
    submitBtn().should( 'exist' );
    cancelBtn().should( 'exist' );
  } );

  it( 'filling out inputs and canceling', () => {
    textInput()
      .should( 'have.value', '' )
      .type( 'Rock out with your socks out', { delay: 50 } )
      .should( 'have.value', 'Rock out with your socks out' );
    
    authorInput()
      .should( 'have.value', '' )
      .type( 'Captain Kangaroo', { delay: 50 } )
      .should( 'have.value', 'Captain Kangaroo' );
    
    cancelBtn()
      .click();
    
    submitBtn()
      .should( 'be.disabled' );
    
  } );

  it( 'filling out inputs and submitting', () => {
    submitBtn()
      .should( 'be.disabled' );
    
    textInput()
      .should( 'have.value', '' )
      .type( 'Rock out with your socks out', { delay: 50 } )
      .should( 'have.value', 'Rock out with your socks out' );
    
    submitBtn()
      .should( 'be.disabled' );
    
    authorInput()
      .should( 'have.value', '' )
      .type( 'Captain Kangaroo', { delay: 50 } )
      .should( 'have.value', 'Captain Kangaroo' );
    
    submitBtn()
      .should( 'be.enabled' );
    
    submitBtn()
      .click();
  } );

  it( 'edit last created, clear fields, fill and submit', () => {
    lastEditBtn()
      .click();
    
    textInput()
      .should( 'have.value', 'Rock out with your socks out' )
      .clear()
      .type( 'We are all rocked out', { delay: 50 } )
      .should( 'have.value', 'We are all rocked out' );
    
    authorInput()
      .should( 'have.value', 'Captain Kangaroo' )
      .clear()
      .type( 'Me', { delay: 150 } )
      .should( 'have.value', 'Me' );
    
    submitBtn()
      .click();
  } );

  it( 'delete last created', () => {
    lastDeleteBtn()
      .click();
  } );

  
} );
