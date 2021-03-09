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

  SitesAdmin(){
    cy.wait(3000)
    cy.get('[title="Sites"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
    cy.wait(3000)
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root > .MuiButton-label').click()
    cy.wait(3000)
    cy.get('#name').type('Caroline')
    cy.get('#addresLine1').type('street 20')
    cy.get('#phoneNumber').type('5698759481')
    cy.get('#addresLine2').type('street 20')
    cy.get('#zipCode').type('58795')
    cy.get('.styles__ButtonWrapper-s3bzkx-8 > .styles__IconButtonWrapper-yai80o-0 > .MuiButtonBase-root').click()
    cy.get('#capacity').type('87')
    cy.wait(1000)

    const state= cy.get('#mui-component-select-state')
    state.click()
    state.get('[data-value="Arizona"]')
    state.click()
    cy.wait(1000)
    const city= cy.get('#mui-component-select-city')
    city.click()
    city.get('[data-value="Ajo"]')
    city.click()
    cy.wait(1000)
    const type= cy.get('#mui-component-select-type')
    type.click()
    type.get('[data-value="5"]')
    type.click()
    cy.wait(1000)
    cy.get('.blue > .MuiButtonBase-root').click()
    cy.wait(3000)

    //edit
    cy.get('[title="Sites"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
    const search =cy.get('#default-search').type('Caroline')
    search.type('{enter}')                
    cy.get('tbody > :nth-child(1) > :nth-child(1) > .k-checkbox').click()                
    cy.xpath("//tbody/tr[1]/td[8]/button[1]").click()
    cy.get('.edit-icons > .styles__IconButtonWrapper-yai80o-0 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
    const name= cy.get('#name')
    name.clear()
    name.type('Juan')
    const adress = cy.get('#addresLine2')
    adress.clear()
    adress.type('street 20')
    const adress2 =cy.get('#addresLine1')
    adress2.clear()
    adress2.type('street 50')               
    const state1= cy.get('#mui-component-select-state')
    state1.click()
    state1.get('[data-value="Arizona"]')
    state1.click()
    cy.wait(2000)
    const city1= cy.get('#mui-component-select-city')
    city1.click()
    city1.get('[data-value="Ajo"]')
    city1.click()
    cy.wait(2000)
            
    cy.get('.blue > .MuiButtonBase-root').click()
             
    }

    EditsitesAdmin(){
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

        cy.wait(3000)

                cy.get('[title="Sites"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
                const search =cy.get('#default-search').type('Caroline')
                search.type('{enter}')                
                cy.get('tbody > :nth-child(1) > :nth-child(1) > .k-checkbox').click()                
                cy.xpath("//tbody/tr[1]/td[8]/button[1]").click()
                cy.get('.edit-icons > .styles__IconButtonWrapper-yai80o-0 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
                cy.get('#name').type('1')
                cy.get('#addresLine2').type('05')
                cy.get('#addresLine1').type('09')               
                const state= cy.get('#mui-component-select-state')
                state.click()
                state.get('[data-value="Arizona"]')
                state.click()
                cy.wait(2000)
                const city= cy.get('#mui-component-select-city')
                 city.click()
               city.get('[data-value="Ajo"]')
               city.click()
               cy.wait(2000)
            
               cy.get('.blue > .MuiButtonBase-root').click()
             
              return this; 

    }

    
    
    SitesCoordinator(){

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

        cy.get('[title="Sites"] > .styles__StyledNavLink-ay6lgn-1').click()
        cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(3000)
        cy.get('#name').type('Deivy')
        cy.get('#addresLine1').type('street 20')
    cy.get('#phoneNumber').type('5698759481')
    cy.get('#addresLine2').type('street 20')
    cy.get('#zipCode').type('58795')
    cy.get('.styles__ButtonWrapper-s3bzkx-8 > .styles__IconButtonWrapper-yai80o-0 > .MuiButtonBase-root').click()
    cy.get('#capacity').type('87')
    cy.wait(1000)

    const state= cy.get('#mui-component-select-state')
    state.click()
    state.get('[data-value="Arizona"]')
    state.click()
    cy.wait(1000)
    const city= cy.get('#mui-component-select-city')
    city.click()
    city.get('[data-value="Ajo"]')
    city.click()
    cy.wait(1000)
    const type= cy.get('#mui-component-select-type')
    type.click()
    type.get('[data-value="5"]')
    type.click()
    cy.wait(1000)
    cy.get('.blue > .MuiButtonBase-root').click()
             
              return this; 
                
         });
       });
      
           
    }

    Edith_SitesCoordinator(){

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
            cy.wait(5000) 
                        
            cy.get('[title="Sites"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
            cy.wait(5000) 
            const search =cy.get('#default-search').type('Deivy')
            search.type('{enter}')                
            cy.get('tbody > :nth-child(1) > :nth-child(1) > .k-checkbox').click()                
            cy.xpath("//tbody/tr[1]/td[8]/button[1]").click()
            cy.get('.edit-icons > .styles__IconButtonWrapper-yai80o-0 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
            cy.get('#name').type('1')
            cy.get('#addresLine2').type('05')
            cy.get('#addresLine1').type('09')         

            const state= cy.get('#mui-component-select-state')
            state.click()
            state.get('[data-value="Arizona"]')
            state.click()
            cy.wait(1000)
            const city= cy.get('#mui-component-select-city')
            city.click()
            city.get('[data-value="Ajo"]')
            city.click()
            cy.wait(2000)            
            cy.get('.blue > .MuiButtonBase-root').click()
             
              return this; 

          

            
            return this; 
              
       });
     });
    
         
  }

        
       
}

export default Coordinator;