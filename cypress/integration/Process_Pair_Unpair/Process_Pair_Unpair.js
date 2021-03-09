///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Process_Pair_Unpair";
import Unpair from "../PageObject/Process_unpair";


const co = new Coordinator();
const ca = new Unpair();

Given("that you enter the pair page", () => {
  co.admin_login();
});

When("the activist and scholar user are available", () => {
  co.go_account();  

})

  Then("Confirmation the pair between the activist user and scholar", () => {    
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Pair Created Successfully`)
    });

    Then("I Click in subbmit button", () => {
        co.submitform();
        cy.on('window:alert', (str) => {
          expect(str).to.equal(`Unpaired successfully`)
        });              
    
      });

   


      

  })


