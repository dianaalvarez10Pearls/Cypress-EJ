///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Staff_account";


const co = new Coordinator();


Given("that you enter a the EJ pag", () => {
  co.admin_login();
    
  });
  
  When("click on the account button", () => {
    co.Staff_accounts_admin()  
    //co.Staff_accounts_superadmin()  
    //co.Staff_accounts_supercoordinator()
       
  })


  Then("I create a new staff", () => {  
    //co.form_event();
   
    
    
           

  })