///  <reference types="cypress"/>

import Loginpage from "./Loginpage";
import "cypress-wait-until";

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

  do_pair(){
    const account =cy.get('[href="/accounts"]')
    account.click();
    cy.wait(3000)
    const pairbutton =cy.get('#nav-tab-4 > .MuiTab-wrapper')
    pairbutton.click()
    cy.wait(3000)
    const add =cy.get('.styles__AddButtonContainer-sc-1d7xqsd-10 > .MuiButtonBase-root > .MuiButton-label')
    add.click()
    const select =cy.get(':nth-child(1) > .styles__Wrapper-sc-1ecina8-0')
    select.click({force:true});
    cy.wait(3000)
    const next =cy.get('.styles__ButtonWrapper-sc-8wk4cv-0 > .MuiButtonBase-root > .MuiButton-label')
    next.click({force:true});
    cy.wait(3000)
    const next1 =cy.get(':nth-child(4) > .styles__Wrapper-sc-1ecina8-0')
    next.click({force:true});
    cy.wait(2000)
    const addpair =cy.get('.styles__StepperFooter-sc-16aeppt-2 > :nth-child(2)')
    addpair.click()
    cy.wait(2000)
    const $input= cy.get('.availability-details > :nth-child(1)')      
      $input.type('schedule New',{delay:500}) 
      cy.wait(2000)
      cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
      cy.get('.styles__AvailableTime-sc-1t7vgz3-8').click()
      cy.get('.styles__StepperFooter-sc-16aeppt-2 > :nth-child(2) > .MuiButtonBase-root').click()
      cy.get(':nth-child(2) > .MuiButtonBase-root').click() 
      cy.wait(2000)
      const save = cy.get('.cancel > .MuiButton-label').click({forcé: true}) ;
      cy.wait(5000) 
                               
       return this;
  }         
  
 

   reschedule_sugest(){

    const account =cy.get('[href="/accounts"]')
    account.click();
    cy.wait(3000)
    const pairbutton =cy.get('#nav-tab-4 > .MuiTab-wrapper')
    pairbutton.click()
    cy.wait(3000)        
    cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()
    cy.wait(1000)    
     cy.xpath("//tbody/tr[1]/td[8]/button[1]").click()
     cy.get('.styles__PairSessionsWrapper-sc-1xaw77t-19 > .MuiExpansionPanelSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
     cy.get('.MuiGrid-grid-xs-12 > :nth-child(2) > :nth-child(3)').click()
     cy.get('.styles__ContentWrapper-y5nk09-2 > :nth-child(2) > .MuiButtonBase-root').click()
     cy.get('.calendar > .MuiFormControl-root > .MuiInputBase-root').click()
     cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
     cy.wait(10000)     

     const $input6= cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')      
      $input6.type('Spalding University',{delay:500}) 
      cy.wait(3000)
      cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
      cy.wait(3000)
     
      cy.xpath("(//div[contains(@class, 'kWdMWU')])[1]").click()

            
      cy.get('.styles__SuggestedMeeting-y5nk09-7').click()
      cy.get('.styles__ButtonWrapper-sc-8wk4cv-0 > .MuiButtonBase-root > .MuiButton-label').click()    

      return this;

   }

   reschedule_extend(){
    const account =cy.get('[href="/accounts"]')
    account.click();
    cy.wait(3000)
    const pairbutton =cy.get('#nav-tab-4 > .MuiTab-wrapper')
    pairbutton.click()
    cy.wait(3000)        
    cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()
    cy.wait(1000)    
     cy.xpath("//tbody/tr[1]/td[8]/button[1]").click()
     cy.wait(2000)
     cy.get('.styles__PairSessionsWrapper-sc-1xaw77t-19 > .MuiExpansionPanelSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
     cy.wait(2000)     
     cy.xpath("(//div[contains(@class, 'jgMoMo')])[3]").click()
      cy.wait(2000)
     cy.get('.styles__ContentWrapper-y5nk09-2 > :nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click();
     cy.wait(2000)
     cy.get(':nth-child(1) > .styles__ButtonWrapper-sc-8wk4cv-0 > .MuiButtonBase-root > .MuiButton-label').click()
     cy.wait(2000)
     cy.xpath("(//div[contains(@class, 'bHBvPJ')])[1]").click()
     cy.get('.styles__ButtonWrapper-sc-8wk4cv-0 > .MuiButtonBase-root > .MuiButton-label')
     

    

    return this;

   }
  
  
 
}

export default Coordinator;