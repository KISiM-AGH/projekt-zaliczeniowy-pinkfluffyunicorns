import {v4 as uuid} from 'uuid';

describe('navigation', ()=>{
    it('should navigate to login page', ()=>{
        cy.visit('localhost:3000')
        cy.get('[data-e2e="login"]').click()
        cy.url().should('include', '/login')
    })
    it('should navigate to registration page', ()=>{
        cy.visit('localhost:3000')
        cy.get('[data-e2e="register"]').click()
        cy.url().should('include','/register')
    })
})

describe('authorization', () =>{
    it('should correctly login user',()=>{
    cy.visit('http://localhost:3000/')
        cy.get('[data-e2e="login"]').click()
        cy.get('[data-e2e="username_input"]').type("e2e_test@mail.com")
        cy.get('[data-e2e="password_input"]').type("verystrongpassword123")
        cy.get('[data-e2e="submit"]').click()
        cy.getCookie('isLogged').should("have.property", 'value','true')
    })
    it('should be able to navigate to adminPanel', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('[data-e2e="login"]').click()
        cy.get('[data-e2e="username_input"]').type("e2e_test_admin@mail.com")
        cy.get('[data-e2e="password_input"]').type("verystrongpassword123")
        cy.get('[data-e2e="submit"]').click()
        cy.getCookie('isLogged').should("have.property", 'value','true')
        cy.getCookie('isAdmin').should('have.property', 'value', 'true')
        cy.get('[data-e2e="adminPanel"]').click()
        cy.url().should('include', '/adminPanel')
    })
})

describe('registration',()=>{
    beforeEach(() => {
        cy.fixture('user1').as('user')
    })

    it('should register new user correctly', function(){
        cy.visit('http://localhost:3000/')
        const rand = `new_e2e_user${uuid()}@mail.com`
        cy.get('[data-e2e="register"]').click()
        cy.get('[data-e2e="email_input"]').type(rand)
        cy.get('[data-e2e="name_input"]').type(this.user.firstName)
        cy.get('[data-e2e="surname_input"]').type(this.user.lastName)
        cy.get('[data-e2e="password_input"]').type(this.user.password)
        cy.get('[data-e2e="street_input"]').type(this.user.street)
        cy.get('[data-e2e="homeNumber_input"]').type(this.user.homeNumber)
        cy.get('[data-e2e="postalCode_input"]').type(this.user.postalCode)
        cy.get('[data-e2e="city_input"]').type(this.user.city)
        cy.get('[data-e2e="submit_button"]').click()

        cy.get('[data-e2e="login"]').click()
        cy.get('[data-e2e="username_input"]').type(rand)
        cy.get('[data-e2e="password_input"]').type(this.user.password)
        cy.get('[data-e2e="submit"]').click()
        cy.getCookie('isLogged').should("have.property", 'value','true')

    })
})

describe('Picky client scenario',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-e2e="login"]').click()
        cy.get('[data-e2e="username_input"]').type("e2e_test@mail.com")
        cy.get('[data-e2e="password_input"]').type("verystrongpassword123")
        cy.get('[data-e2e="submit"]').click()
        cy.getCookie('isLogged').should("have.property", 'value','true')
    })

    it('should add item to cart and remove it',()=>{
        cy.intercept('DELETE', '**/api/v1/cart/item/**').as("removeItem")
        cy.get('[data-e2e="addToCart"]').eq(0).click()
        cy.get('[data-e2e="cart"]').click()
        cy.get('[data-e2e="removeFromCart"]').eq(0).click()
        cy.wait("@removeItem").its('response.statusCode')
            .should('be.oneOf',[200,204])
    })

})
