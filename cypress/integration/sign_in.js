describe('Sign in', function () {
    it ('validate hub signin URL', function () {
       //arrange
       cy.visit('https://hub.alpha.kidsloop.net/')
       //- visit a page
       //act
       //- find the page element
       cy.contains('Click here').click()
       //assert
            cy.url()
                .should('include', '/signin')
    
        
       //assert the page element
    })
    })