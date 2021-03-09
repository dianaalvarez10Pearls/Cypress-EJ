///  <reference types="cypress"/>

import Loginpage from "./Loginpage";
import "cypress-wait-until";
import { watchFile } from "fs";
import { waitForDebugger } from "inspector";
import { textSpanIntersectsWith } from "typescript";

const lp = new Loginpage();
class Coordinator {
  admin_login() {
    const testData = require("../../fixtures/list.json");
    testData.forEach((testDataRow) => {
      const data = {
        username: testDataRow.username,
        password: testDataRow.password,
      };
      lp.Visit();
      const FN = cy.xpath("//input[@id='username']");
      FN.clear();
      context(`Generating a test for ${data.username}`, () => {
        FN.type(data.username);
        const ln = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"
        );
        ln.clear();
        ln.type(`${data.password}`);
        const submit = cy.xpath("//span[contains(text(),'Sign In')]");
        submit.click();
        return this;
        });
    });
  }

  Staff_accounts_admin(){                                       

    cy.get('[title="Accounts"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.wait(3000)
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('.MuiList-root > [tabindex="0"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Martín')
    cy.get('#LastName').type('Coordinador')
    cy.get('#Mail').type('Martín@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="Coordinator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Mario')
    cy.get('#LastName').type('Junior Coordinator')
    cy.get('#Mail').type('mario@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="JuniorCoordinator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Stella')
    cy.get('#LastName').type('Marketing')
    cy.get('#Mail').type('Stella@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="MarketingAdministrator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Jhon')
    cy.get('#LastName').type('Regularadministrator')
    cy.get('#Mail').type('Jhon@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="RegularAdministrator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('DoraLia')
    cy.get('#LastName').type('Sitesupervisor')
    cy.get('#Mail').type('Doralia@sitesupervisor.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="SiteSupervisor"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 
    

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@gmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="SuperAdmin"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@gmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="SuperCoordinator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@gmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="VolunteerSupervisor"]').click()    
    cy.wait(3000)
    //cy.get('.blue > .MuiButtonBase-root').click()

    }   
    
    Staff_accounts_superadmin() {
      
      const testData = require("../../fixtures/list.json");
      testData.forEach((testDataRow) => {
        const data = {
          superadminlogin: testDataRow.superadminlogin,
          password: testDataRow.password,
        };
        lp.Visit();
        const FN = cy.xpath("//input[@id='username']");
        FN.clear();
        context(`Generating a test for ${data.superadminlogin}`, () => {
          FN.type(data.superadminlogin);
          const ln = cy.xpath(
            "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"
          );
          ln.clear();
          ln.type(`${data.password}`);
          const submit = cy.xpath("//span[contains(text(),'Sign In')]");
          submit.click();

          cy.wait(4000)

          cy.get('[title="Accounts"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
         cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
         cy.get('#FirstName').type('Duglas')
         cy.get('#LastName').type('administrador')
         cy.get('#Mail').type('Duglas@yopmail.com')
         cy.get('#CellPhone').type('7895849561')                             
         cy.get('#mui-component-select-role').click()
         cy.get('.MuiList-root > [tabindex="0"]').click()
        //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Martín')
    cy.get('#LastName').type('Coordinador')
    cy.get('#Mail').type('Martín@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="Coordinator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Mario')
    cy.get('#LastName').type('Junior Coordinator')
    cy.get('#Mail').type('mario@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="JuniorCoordinator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Stella')
    cy.get('#LastName').type('Marketing')
    cy.get('#Mail').type('Stella@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="MarketingAdministrator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Jhon')
    cy.get('#LastName').type('Regularadministrator')
    cy.get('#Mail').type('Jhon@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="RegularAdministrator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('DoraLia')
    cy.get('#LastName').type('Sitesupervisor')
    cy.get('#Mail').type('Doralia@sitesupervisor.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="SiteSupervisor"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 
    

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@gmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="SuperAdmin"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@gmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="SuperCoordinator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@gmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="VolunteerSupervisor"]').click()    
    cy.wait(3000)
    //cy.get('.blue > .MuiButtonBase-root').click()
      
          return this;
          });
      });
    }

    Staff_accounts_supercoordinator() {
      
      const testData = require("../../fixtures/list.json");
      testData.forEach((testDataRow) => {
        const data = {
          supercoorinator: testDataRow.supercoorinator,
          password: testDataRow.password,
        };
        lp.Visit();
        const FN = cy.xpath("//input[@id='username']");
        FN.clear();
        context(`Generating a test for ${data.supercoorinator}`, () => {
          FN.type(data.supercoorinator);
          const ln = cy.xpath(
            "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"
          );
          ln.clear();
          ln.type(`${data.password}`);
          const submit = cy.xpath("//span[contains(text(),'Sign In')]");
          submit.click();

          cy.wait(4000)

          cy.get('[title="Accounts"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
         cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
         cy.get('#FirstName').type('Duglas')
         cy.get('#LastName').type('administrador')
         cy.get('#Mail').type('Duglas@yopmail.com')
         cy.get('#CellPhone').type('7895849561')                             
         cy.get('#mui-component-select-role').click()
         cy.get('.MuiList-root > [tabindex="0"]').click()
        //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Martín')
    cy.get('#LastName').type('Coordinador')
    cy.get('#Mail').type('Martín@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="Coordinator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Mario')
    cy.get('#LastName').type('Junior Coordinator')
    cy.get('#Mail').type('mario@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="JuniorCoordinator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Stella')
    cy.get('#LastName').type('Marketing')
    cy.get('#Mail').type('Stella@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="MarketingAdministrator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Jhon')
    cy.get('#LastName').type('Regularadministrator')
    cy.get('#Mail').type('Jhon@yopmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="RegularAdministrator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('DoraLia')
    cy.get('#LastName').type('Sitesupervisor')
    cy.get('#Mail').type('Doralia@sitesupervisor.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="SiteSupervisor"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 
    

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@gmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="SuperAdmin"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@gmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="SuperCoordinator"]').click()
    //cy.get('.blue > .MuiButtonBase-root').click() 

    cy.wait(3000)

    cy.get('.styles__CloseIconButton-sc-1o1uwaf-3 > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#FirstName').type('Duglas')
    cy.get('#LastName').type('administrador')
    cy.get('#Mail').type('Duglas@gmail.com')
    cy.get('#CellPhone').type('7895849561')                             
    cy.get('#mui-component-select-role').click()
    cy.get('[data-value="VolunteerSupervisor"]').click()    
    cy.wait(3000)
    //cy.get('.blue > .MuiButtonBase-root').click()
      
          return this;
          });
      });
    }
     
       
    
    }
        






export default Coordinator;

