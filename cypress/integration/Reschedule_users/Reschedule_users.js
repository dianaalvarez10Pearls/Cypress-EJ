///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Reschedule_users";



const co = new Coordinator();

Given("that you enter the pair page", () => {
    //co.admin_login();
    //co.Reschedule_activist();
    
    
  });
  
  When("the activist user is pair and ending a reschedule to the guardian user", () => {
    co.admin_Guardian()    
    //co.Reschedule_guardian();
    co.reschedule_extend()
     
  
  })


  Then("the activist accepts the invitation", () => {  
    //co.form_event();
   
    
    
           

  })