///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Steps_Activist";



const co = new Coordinator();

Given("that you enter a the EJ pag", () => {
    co.admin_login();
    
  });
  
  When("an activist user is registered", () => {
    
    //co.go_asigns_coordinator();
    co.Change_Status_Activist();
    //co.go_asigns_Scholar();
    //co.Change_Status_Scholar();
    
     
  
  })

  Then("I go through all the steps to the activist user", () => {      
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`The application was approved successfully`)
    });                
    
        

  })