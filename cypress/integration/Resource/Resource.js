///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Resource";



const co = new Coordinator();

Given("that you enter a the EJ pag", () => {
    //co.admin_login();
    
  });
  
  When("click on the resources button", () => {
    //co.ResourceAdmin();
    //co.EditAdmin();
    //co.login_Activist_Addresource()
    co.login_Coordinator_Addresource()
    
     
  
  })


  Then("I create a resource", () => {  
    //co.form_event();
   
    
    
           

  })