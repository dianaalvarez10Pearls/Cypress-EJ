///  <reference types="cypress"/>

import Loginpage from "./Loginpage";
import "cypress-wait-until";
import { watchFile } from "fs";
import { waitForDebugger } from "inspector";

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

  go_account() {
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
                               
       return this;
  }
      
      submitform() {
    const save = cy.get('.cancel > .MuiButton-label').click({forcé: true}) ;
    cy.wait(5000)        
    cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()
    cy.wait(1000)
    cy.get('.material-icons').contains('keyboard_arrow_down').click()
    cy.wait(1000)
    cy.get('.kXzvVE .kshwpO').contains('Unpair').click()
    cy.wait(2000)
    cy.get('.blue > .MuiButtonBase-root').click()
    cy.wait(1000)
    
    return this;
  }
 
  
}

export default Coordinator;
