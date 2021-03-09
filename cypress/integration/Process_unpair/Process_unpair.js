import Loginpage from "../PageObject/Loginpage";
import Unpair from "../PageObject/Process_unpair";



const ca = new Unpair();

Given("that you enter the pair page", () => {
  ca.admin_login();
});

When("there is a successful pair", () => {
  ca.go_account_unpair();
  

})
  
    Then("I do unpair", () => {
        ca.submitform();
      

  })