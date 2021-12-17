describe('Lambda Eats', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3003/pizza')
    })

    const nameInput = () => cy.get('input[id="name-input"]');
    const sizeInput = () => cy.get('select[name=size]');
    const sausageInput = () => cy.get('input[name=sausage]');
    const pineappleInput = () => cy.get('input[name=pineapple]');
    const jalapenoInput = () => cy.get('input[name=jalapeno]');
    const beefInput = () => cy.get('input[name=beef]');
    const specialInput = () => cy.get('input[name=special]');
    const submit = () => cy.get('button[id="order-button"]');

    it('Initial test! Just checking!', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
    })

    it('Elements are showing on page', () => {
        nameInput().should('exist');
        sizeInput().should('exist');
        sausageInput().should('exist');
        pineappleInput().should('exist');
        jalapenoInput().should('exist');
        beefInput().should('exist');
        specialInput().should('exist');
        submit().should('exist');
    })
    // add text to the box
describe('Inputting Text and Checkbox', () => {
    it('can navigate to site', () => {
        cy.url().should('include', 'localhost');
    })
    it('can type in text', () => {
        nameInput()
        .should('have.value', '')
        .type('Kim')
        .should('have.value', 'Kim')

        specialInput()
        .should('have.value', '')
        .type('Extra cheese please')
        .should('have.value', 'Extra cheese please')
    })
    it('multiple toppings can be checked', () => {
        sausageInput()
        .check()
        .uncheck()

        pineappleInput()
        .check()
        .uncheck()

        jalapenoInput()
        .check()
        .uncheck()

        beefInput()
        .check()
        .uncheck()
    })
})
describe('Submit', () => {
    it('submit button enabled when required inputs are filled out', () => {
        nameInput().type('kim');
        sizeInput().select('XXX');
        submit().should('not.be.disabled');
    })
})
  

})