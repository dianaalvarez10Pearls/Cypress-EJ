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

  ResourceAdmin() {
    cy.wait(3000)
    cy.get('[title="Resources"] > .styles__StyledNavLink-ay6lgn-1').click()
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
    cy.get('#title').type('Languages')
    cy.get('#description').type('description')
    cy.get('#link').type('https://ej-qa-web.azurewebsites.net/dashboard')
    const guardiantitle = cy.get('#mui-component-select-subjectId').click()
    cy.get('.MuiList-root > [tabindex="0"]').click()    
       cy.get('#mui-component-select-resourceTypeId').click()
       cy.get('.MuiList-root > [tabindex="0"]').click()       
       cy.get('.blue > .MuiButtonBase-root').click()    
     
  }

  EditAdmin(){
    cy.wait(3000)
    //cy.get('[title="Resources"] > .styles__StyledNavLink-ay6lgn-1').click()
    //cy.wait(4000)
    const search =cy.get('.MuiInputBase-root').type('Languages')
    cy.wait(4000)
    cy.get('#default-search').type("{enter}", { force: true });
    cy.wait(2000)
    cy.get('.card-header--action > .styles__IconButtonWrapper-yai80o-0 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
    cy.get('.card-header--action > .active > :nth-child(1)').click()
    cy.get('.edit-icons > .styles__IconButtonWrapper-yai80o-0 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
    cy.get('#title').type('1')
    cy.get('#description').type('1')
    const clear=cy.get('#link').clear()
    clear.type('https://ej-qa-web.azurewebsites.net/applications')
    cy.get('.blue > .MuiButtonBase-root').click()    
  }
   
  login_Activist_Addresource(){
    
      const testData = require("../../fixtures/list.json");
      testData.forEach((testDataRow) => {
        const data = {
          activistresource: testDataRow.activistresource,
          passwordactivresource: testDataRow.passwordactivresource,
        };
        lp.Visit();
        const FN = cy.xpath("//input[@id='username']");
        FN.clear();
        context(`Generating a test for ${data.activistresource}`, () => {
          FN.type(data.activistresource);
          const ln = cy.xpath(
            "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"
          );
          ln.clear();
          ln.type(`${data.passwordactivresource}`);
          const submit = cy.xpath("//span[contains(text(),'Sign In')]");
          submit.click();
          cy.wait(4000)
         cy.get('[title="Resources"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
         cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
         cy.get('#title').type('Spanish')
         cy.get('#description').type('description')
         cy.get('#link').type('https://ej-qa-web.azurewebsites.net/dashboard')
         const guardiantitle = cy.get('#mui-component-select-subjectId').click()
         cy.get('.MuiList-root > [tabindex="0"]').click()    
         cy.get('#mui-component-select-resourceTypeId').click()
         cy.get('.MuiList-root > [tabindex="0"]').click()       
         cy.get('.blue > .MuiButtonBase-root').click()  
          return this;
          });
      });
     
  }

  login_Coordinator_Addresource(){

    cy.wait(2000)
    const testData = require("../../fixtures/list.json");
      testData.forEach((testDataRow) => {
        const data = {
          coorname: testDataRow.coorname,
          passwordactivresource: testDataRow.passwordactivresource,
        };
        lp.Visit();
        const FN = cy.xpath("//input[@id='username']");
        FN.clear();
        context(`Generating a test for ${data.coorname}`, () => {
          FN.type(data.coorname);
          const ln = cy.xpath(
            "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"
          );
          ln.clear();
          ln.type(`${data.passwordactivresource}`);
          const submit = cy.xpath("//span[contains(text(),'Sign In')]");
          submit.click();
    cy.wait(3000)

    
    cy.get('[title="Resources"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
         cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root').click()
         cy.get('#title').type('English')
         cy.get('#description').type('description')
         cy.get('#link').type('https://ej-qa-web.azurewebsites.net/dashboard')
         const guardiantitle = cy.get('#mui-component-select-subjectId').click()
         cy.get('.MuiList-root > [tabindex="0"]').click()    
         cy.get('#mui-component-select-resourceTypeId').click()
         cy.get('.MuiList-root > [tabindex="0"]').click()       
         cy.get('.blue > .MuiButtonBase-root').click()  
          return this; 
            
     });
   });
  }
       
}

export default Coordinator;