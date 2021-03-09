///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Sites";



const co = new Coordinator();

Given("that you enter a the EJ pag", () => {
    co.admin_login();
    
  });
  
  When("click on the resources button", () => {
    co.SitesAdmin()
    //co.EditsitesAdmin()
    //co.SitesCoordinator()
    //co.Edith_SitesCoordinator()
   
    
    
     
  
  })


  Then("I create a resource", () => {  
    //co.form_event();
   
    
    
           

  })