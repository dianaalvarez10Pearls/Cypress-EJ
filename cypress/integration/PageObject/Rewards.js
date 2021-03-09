///  <reference types="cypress"/>
import "cypress-file-upload";

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

  Addpoints_createorder() {
    cy.wait(3000)
    cy.get('[title="Accounts"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
    cy.wait(1000)
    cy.get('#nav-tab-3 > .MuiTab-wrapper').click()
    cy.wait(1000)
    cy.get('#default-search').type('nala scholar{enter}')
    cy.wait(3000)
    cy.xpath("//button[contains(text(),'View')]").click()
    cy.wait(3000)
    cy.get(':nth-child(4) > .MuiExpansionPanelSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
    cy.wait(3000)
    cy.get('.edit-icons > .styles__IconButtonWrapper-yai80o-0 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
    cy.wait(1000)
    const points = cy.get('#Points')
    .clear()
    .type('1000')
    cy.wait(1000)
    const token = cy.get('#Tokens')
    .clear()
    .type('1000')
    cy.wait(1000)
    const spin = cy.get('#Spins')
    .clear()
    .type('1000')
    cy.get('.blue > .MuiButtonBase-root > .MuiButton-label').click()   
  
    //rewards

    cy.wait(5000)
    cy.get('[title="Rewards"] > .styles__StyledNavLink-ay6lgn-1').click()
    cy.wait(2000)       
    cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root > .MuiButton-label').click()
    cy.wait(2000)     
    const $input6= cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')      
      $input6.type('nala scholar',{delay:500}) 
      cy.wait(3000)
      cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
      cy.wait(3000)
      cy.xpath("(//button[contains(@class, 'CyANW')])[2]").click({ force: true })
      cy.get('.styles__Footer-gzptp1-8 > .MuiButtonBase-root > .MuiButton-label').click()
      cy.wait(5000)

      //changesstatus

      cy.get('[title="Rewards"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
      cy.wait(3000)
      cy.xpath("(//td[contains(@class, 'col-selected')])[1]").click()
      cy.xpath("(//td[contains(@class, 'k-hierarchy-cell')])[1]").click()
      cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click()
      cy.wait(3000)
      cy.xpath("//li[@id='67']").click()
      cy.wait(3000)
      cy.xpath("(//td[contains(@class, 'col-selected')])[1]").click()
      cy.xpath("(//td[contains(@class, 'k-hierarchy-cell')])[1]").click()
      cy.wait(3000)
      cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click()
      cy.wait(3000)
      cy.xpath("//li[@id='68']").click()
      cy.wait(3000)
      cy.xpath("(//td[contains(@class, 'col-selected')])[1]").click()
      cy.xpath("(//td[contains(@class, 'k-hierarchy-cell')])[1]").click()
      cy.wait(3000)
      cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click()
      cy.wait(3000)
      cy.xpath("//li[@id='69']").click()      

     
    }

    Addprize_edit_delete(){
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

        //edit
        cy.get('[title="Rewards"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
        cy.wait(3000)
        cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(3000)
        cy.xpath("(//div[contains(@class, 'dBaAyp')])[2]").click()
        cy.get('.card-header--action > .active > :nth-child(1)').click()
        const name = cy.get('#Name')
        name.clear()
        name.type('kids')
        cy.get('#mui-component-select-prizeCategories').click()
        cy.xpath("(//li[contains(@class, 'jkpgYz')])[2]").click() 
        cy.get('.blue > .MuiButtonBase-root').click()
        return this;
        });
    });
    

    }

   
    
  
   
  
    
         
}

export default Coordinator;