///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Events";



const co = new Coordinator();

Given("that you enter a the EJ pag", () => {
    co.admin_login();
    
  });
  
  When("you enter to create events and all the form fields are completed", () => {
    co.go_calendar();
     
  
  })


  Then("I Click in save button", () => {  
    //co.form_event();
    //co.submitform();  
    //co.Workshop();
    //co.Interview_Activist();
    //co.Orientation_Activist();
    //co.Orientation_Scholar();
    //co.Interview_Scholar();
    //co.Group_Tutoring_scholar();
    co.Group_Tutoring_Activist()
    
    
           

  })
    
  
   

    
  