describe('create account Scholar', function(){
    it('Ingreso al formulario', function(){

        cy.visit('https://ej-dev-web.azurewebsites.net/');     
        cy.get('#username').type('JoseBedoya')
        cy.get('#password').type('joseB2468*')
        cy.contains('Sign In',{timeout: 6000}).click()
        cy.get('[title="Accounts"]').click()        
        cy.get('#nav-tab-3 > .MuiTab-wrapper').click()        
        cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get(':nth-child(1) > .MuiExpansionPanelSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]").type('Sherlock')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/input[1]").type('Holms')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/input[1]").type('calle 30')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/input[1]").type('Calle 14')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[1]/input[1]").type('12345')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[1]/input[1]").type('dcalvarez@10pearls.com')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[10]/div[1]/div[1]/div[1]/input[1]").type('3136524290')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]/div[1]/input[1]").type('5344920925')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[12]/div[1]/div[1]/div[1]/input[1]").type('6346592092')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[14]/fieldset[1]/div[1]/label[1]").click()
        //cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]").select('Mr').should('have.value','Mr')
       // cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]").click
        const guardiantitle = cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")
        guardiantitle.click()
        guardiantitle.get('[data-value="Mr"]')
        guardiantitle.click()
        const scholarstate = cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]")
        scholarstate.click()
        scholarstate.get('[data-value="Alabama"]')
        scholarstate.click()
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/input[1]").type('San Francisco')
        //cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[1]/input[1]").type('12348')

        //demographic Information
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/span[1]/i[1]").click() //demographic Information
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/fieldset[1]/div[1]/label[1]/span[1]/span[1]/input[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/fieldset[1]/div[1]/label[4]/span[1]/span[1]/input[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/fieldset[1]/div[1]/label[2]/span[1]/span[1]/input[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/fieldset[1]/div[1]/label[2]/span[1]/span[1]/input[1]").click()

        //child information
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/span[1]/i[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]").type('Duglas')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]").type('Holmes')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/input[1]").type('Brother')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/input[1]").type('dcalvarez@10pearls.com')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/input[1]").type('3132542582')
        const ScholarGender = cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]")
        ScholarGender.click()
        ScholarGender.get('[data-value="Male"]')
        ScholarGender.click()
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[8]/fieldset[1]/div[1]/label[3]/span[1]/span[1]/input[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[10]/div[1]/div[1]/div[1]/textarea[1]").type('California, estado occidental de EE.UU., se extiende desde la frontera con México por la costa del Pacífico por cerca de 900 millas. Su terreno incluye playas con acantilados, bosques de secoya, la cordillera Sierra Nevada, las tierras de cultivo del Valle Central de California y el desierto de Mojave. La ciudad de Los Ángeles es la sede de la industria del entretenimiento de Hollywood. San Francisco, ciudad montañosa, es conocida por el puente Golden Gate, la isla de Alcatraz y los tranvías.')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[12]/div[1]/div[1]/div[1]/textarea[1]").type('California es uno de los cincuenta estados de Estados Unidos de América. Su capital es Sacramento, y su ciudad más poblada, Los Ángeles. Está ubicado en la región oeste del país, división Pacífico, limitando al norte con Oregón, al este con Nevada, al sureste con el río Colorado que lo separa de Arizona, al sur con Baja California (México) y al oeste con el océano Pacífico. Con 37 253 956 habitantes en 2010 es el estado más poblado y con 423 970 km², el tercero más extenso, por detrás de Alaska y Texas. Fue admitido en la Unión el 9 de septiembre de 1850 como el estado número 31.')

        //Authentication and Password
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[2]/span[1]/i[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]").type('sherLholmes')
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]").type('asd123.$uW')

        //Save
        cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[2]/a[1]/span[1]").click()
    })
})