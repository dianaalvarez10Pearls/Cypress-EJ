///  <reference types="cypress"/>

import Loginpage from "./Loginpage";
import "cypress-wait-until";

const lp = new Loginpage();
class Coordinator {
  admin_login() {
    const testData = require("../../fixtures/list.json");
    testData.forEach((testDataRow) => {
      const data = {
        Activist: testDataRow.Activist,
        PasswordActiv: testDataRow.PasswordActiv,
      };
      lp.Visit();
      const FN = cy.xpath("//input[@id='username']");
      FN.clear();
      context(`Generating a test for ${data.Activist}`, () => {
        FN.type(data.Activist);
        const ln = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"
        );
        ln.clear();
        ln.type(`${data.PasswordActiv}`);
        const submit = cy.xpath("//span[contains(text(),'Sign In')]");
        submit.click();
        cy.wait(3000)
        return this;
        });
    });
  }

  Reschedule_activist() {
    const account =cy.get('[title="Calendar"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons')
    account.click();
    cy.wait(3000)
    cy.get('.styles__Event-sc-1t3bdqm-8').click()
    cy.get('.iconSection > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.calendar > .MuiFormControl-root > .MuiInputBase-root').click()

    //cy.get(':nth-child(6) > :nth-child(1) > .styles__DayWrapper-sc-1tt0r8d-0 > .MuiButtonBase-root').click()
   
    cy.get(':nth-child(2) > .MuiButton-label').click()
    cy.wait(3000)
    const $input7= cy.get('.MuiAutocomplete-popupIndicator')     
      $input7.type('Spalding University',{delay:500}) 
      cy.wait(3000)
      cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
      cy.wait(3000)
      
      cy.xpath("(//div[contains(@class, 'kWdMWU')])[1]").click()

      cy.get('.styles__ButtonWrapper-sc-8wk4cv-0 > .MuiButtonBase-root').click()
      
          
      
      cy.wait(3000)
    
     

       return this;
  }         
  
  admin_Guardian() {
    const testData = require("../../fixtures/list.json");
    testData.forEach((testDataRow) => {
      const data = {
        userGuardian: testDataRow.userGuardian,
        PasswordGuar: testDataRow.PasswordGuar,
      };
      lp.Visit();
      const FN = cy.xpath("//input[@id='username']");
      FN.clear();
      context(`Generating a test for ${data.userGuardian}`, () => {
        FN.type(data.userGuardian);
        const ln = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"
        );
        ln.clear();
        ln.type(`${data.PasswordGuar}`);
        const submit = cy.xpath("//span[contains(text(),'Sign In')]");
        submit.click();
        cy.wait(3000)
        return this;
        });
    });
  }

  Reschedule_guardian(){
    cy.wait(3000)
    cy.get('[title="Calendar"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
    cy.wait(5000)    
    cy.xpath("//i[contains(text(),'restore')][1]").click()    
    cy.xpath("(//div[contains(@class, 'dDxOCu')])[1]").click()     
    cy.wait(3000)
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiButton-label').click()

   
      return this;

   }
    
   reschedule_extend(){
    cy.wait(3000)
    cy.get('[title="Calendar"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
    cy.wait(5000)
    cy.xpath("(//div[contains(@class, 'ifRHxE')])[1]").click()
    cy.wait(4000)
    cy.xpath("(//div[contains(@class, 'dBaAyp')])[2]").click()
    cy.wait(4000)
    cy.get('.styles__ContentWrapper-y5nk09-2 > :nth-child(3) > .MuiButtonBase-root').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > .MuiButton-label').click()
    cy.wait(3000)
    const $input7= cy.get('.MuiAutocomplete-popupIndicator')     
     $input7.type('Spalding University',{delay:500}) 
     cy.wait(3000)
     cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
     cy.wait(3000)      
     cy.xpath("(//div[contains(@class, 'kWdMWU')])[1]").click()
     cy.get('.styles__ButtonWrapper-sc-8wk4cv-0 > .MuiButtonBase-root').click()

    

    

    return this;

   }
  
  
 
}

export default Coordinator;