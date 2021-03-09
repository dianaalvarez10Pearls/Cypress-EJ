///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import "cypress-wait-until";
import { watchFile } from "fs";
import { waitForDebugger } from "inspector";

const lp = new Loginpage();
class Unpair {
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

  go_account_unpair() {
    const account =cy.get('[href="/accounts"]')
    account.click();            
    const pairbutton =cy.get('#nav-tab-4 > .MuiTab-wrapper')
    pairbutton.click()    
    cy.wait(2000)
    cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()
    cy.wait(2000)
    cy.get('.material-icons').contains('keyboard_arrow_down').click()
    cy.wait(2000)
    cy.get('.kXzvVE .kshwpO').contains('Unpair').click()
    cy.wait(2000)
    cy.get('.blue > .MuiButtonBase-root').click()
    cy.wait(10000)

                         
       return this;
  }
      
      submitform() {
    const save = cy.get('.blue > .MuiButtonBase-root').click()
    cy.wait(10000)
    save.click();
    return this;
  }
}

export default Unpair;