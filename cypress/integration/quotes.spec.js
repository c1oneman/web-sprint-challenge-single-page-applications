// write tests here
describe('Pizza app', () => {
  // here are the tests
  beforeEach(() => {
    //arbitrary code to run before each test
    cy.visit('http://localhost:3000/make-pizza');
  })


  // here are the tests

  it('Test is running', () => {
      expect(1 + 2).to.equal(3)
  })

  it('Confirm forms inputs exist', () => {
      cy.get('input[name="name"]').should('exist')
      cy.get('select[name="size"]').should('exist')
      cy.get('input[name="pepperoni"]').should('exist')
      cy.get('input[name="sausage"]').should('exist')
      cy.get('input[name="shrimp"]').should('exist')
      cy.get('input[name="bacon"]').should('exist')
      cy.get('input[name="special"]').should('exist')
  });

  it('Can use inputs values', () => {
    cy.get('input[name="name"]').type('John')
    cy.get('select[name="size"]').select('Medium')
    cy.get('input[name="pepperoni"]').check()
    cy.get('input[name="sausage"]').check()
    cy.get('input[name="shrimp"]').check()
    cy.get('input[name="bacon"]').check()
    cy.get('input[name="special"]').type('Special Text')
    // input then check
    cy.get('input[name="name"]').should('have.value', 'John')
    cy.get('select[name="size"]').should('have.value', 'Medium')
    cy.get('input[name="pepperoni"]').should('have.value', 'on')
    cy.get('input[name="sausage"]').should('have.value', 'on')
    cy.get('input[name="shrimp"]').should('have.value', 'on')
    cy.get('input[name="bacon"]').should('have.value', 'on')
    cy.get('input[name="special"]').should('have.value', 'Special Text')
  });
  it('Check disabled feature', () => {
    cy.get('button').should('be.disabled')

    cy.get('input[name="name"]').type('John')

    cy.get('input[name="special"]').type('Special Text')

    cy.get('button').should('be.disabled')

    cy.get('select[name="size"]').select('Medium')
    cy.get('button').should('be.enabled')

  });
  it('Test submit button', () => {
    cy.get('input[name="name"]').type('John')
    cy.get('select[name="size"]').select('Medium')
    cy.get('input[name="pepperoni"]').check()
    cy.get('input[name="sausage"]').check()
    cy.get('input[name="shrimp"]').check()
    cy.get('input[name="bacon"]').check()
    cy.get('input[name="special"]').type('Special Text')
    cy.get('button').click()
  });
})