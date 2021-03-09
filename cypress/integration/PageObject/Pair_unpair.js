describe('create account Scholar', function(){

    before(function(){
        cy.fixture('users').then(function(data){
        this.data=data
    })

    })    
    it('Ingreso al formulario', function(){  

        Cypress.Commands.add('login', (email, password) => {
            cy.visit('https://ej-dev-web.azurewebsites.net/');   
            cy.get('#username').type(email)
            cy.get('#password').type(password)
            const login = cy.contains('Sign In')
            if(login.should('be.visible'))
            {
                login.click()
            }
            else            
            Cypress.env('RETRIES', 2)
        });

        Cypress.Commands.add('logout', () => {
         cy.get('.MuiIconButton-label .material-icons').contains('settings').click({force: true})     
         cy.get('.kshwpO').contains('Logout').click({force: true})                             
        })   
          
        Cypress.Commands.add('pair', () => {  
            const pair = cy.get('.fELloZ').get('.cLFNJP') 
            if (pair.should('be.visible'))  
            {
                pair.click()
            }
            else            
            Cypress.env('RETRIES', 2);              
            const next = cy.get('.jRjvBr').get('.DkKub').should("be.visible") 
            if (next.should('be.visible'))  
            {
                next.click()
            }
            else
            Cypress.env('RETRIES', 2);           
            cy.wait(2000)
            cy.get('.DkKub').click({force: true})
            cy.get('.fELloZ')
            //cy.wait(2000)
            cy.get('.bePFFw').click({force: true})
            cy.get('.MuiButton-label').contains('Next').click({force: true})
            cy.get('.MuiButton-label').contains('Finish').click({force: true})
            cy.get('.MuiButton-label').contains('Pair with Activist').click({force: true})
        }) 

        Cypress.Commands.add('unpair', () => {
            cy.get('[title="Accounts"]').should("be.visible").click()             
            cy.get('.MuiButtonBase-root.jss571 > .MuiSvgIcon-root').click()
            cy.get('#nav-tab-5 > .MuiTab-wrapper').contains('Pairs').should("be.visible").click()
            cy.wait(2000)
            cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()
            cy.get('.material-icons').contains('keyboard_arrow_down').click()
            cy.get('.kXzvVE .kshwpO').contains('Unpair').click()
            cy.get('.blue > .MuiButtonBase-root').click()                          
                                 
        })
        
        //invocar funciones
        cy.login(this.data[0].username, this.data[0].password)        
        cy.pair()        
        cy.logout()
        cy.login(this.data[1].username, this.data[1].password)        
        cy.unpair()

        })
        })