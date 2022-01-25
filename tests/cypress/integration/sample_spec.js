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
})

describe('registration',()=>{
    it('should register new user correctly', ()=>{
        cy.visit('htpp://localhost:3000/')
        cy.get('[data-e2e="register"]').click()
    })
})

