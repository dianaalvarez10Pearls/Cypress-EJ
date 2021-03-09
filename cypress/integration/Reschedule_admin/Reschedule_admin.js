///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Reschedule_admin";



const co = new Coordinator();

Given("that you enter the pair page", () => {
    co.admin_login();
    
  });
  
  When("the activist user is pair and ending a reschedule to the guardian user", () => {
    //co.do_pair()
    //co.reschedule_sugest()
    co.reschedule_extend()
     
  
  })


  Then("the activist accepts the invitation", () => {  
    //co.form_event();
   
    
    
           

  })