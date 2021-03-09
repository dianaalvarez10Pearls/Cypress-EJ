///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Rewards";



const co = new Coordinator();


Given("that you enter a the EJ pag", () => {
    co.admin_login();    
    
  });
  
  When("click on the Rewards button", () => {
    co.Addpoints_createorder();
    //co.Addprize_edit_delete()
   
    
     
  
  })


  Then("I create a Rewards", () => {  
    //co.form_event();
   
    
    
           

  })