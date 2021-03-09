///  <reference types="cypress"/>

import Loginpage from "./Loginpage";
import "cypress-wait-until";

const lp = new Loginpage();
class Coordinator {
  admin_login() {
    const testData = require("../../fixtures/list.json");
    testData.forEach((testDataRow) => {
      const data = {
        username: testDataRow.username,
        password: testDataRow.password,
      };
      lp.Visit();
      const FN = cy.xpath("//input[@id='username']");
      FN.clear();
      context(`Generating a test for ${data.username}`, () => {
        FN.type(data.username);
        const ln = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"
        );
        ln.clear();
        ln.type(`${data.password}`);
        const submit = cy.xpath("//span[contains(text(),'Sign In')]");
        submit.click();
        return this;
        });
    });
  }

  go_calendar() {
   const calendar =cy.get('[title="Calendar"] > .styles__StyledNavLink-ay6lgn-1')
   calendar.click();
   const Addevent = cy.get('.add-btn > .MuiButtonBase-root')
   Addevent.click({force:true}); 
   cy.wait(1000);         
    
    return this;
  }

  form_event() {
    cy.wait(1000)
    const description = cy.get('.styles__DescriptionWrapper-sc-1ffx2oh-12 > .MuiFormControl-root > .MuiInputBase-root').type('Pair New')    
    const $input= cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')     
      $input.type('Jonathan1 Quinn1',{delay:300}).click() 
      cy.wait(1000)
      cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
      const $input11=cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
      $input11.type('Samantha Potter',{delay:500}).click() 
      cy.wait(1000)     
      cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
      const $input3= cy.get('#mui-component-select-siteId') .click()        
      const $input4= cy.get('.MuiList-root > [tabindex="0"]').click()   
      const save= cy.get('.blue > .MuiButtonBase-root')    
      save.click();
      cy.wait(2000) 

      return this;
                
  }
  
  Workshop() {
       
   const programtype= cy.get('#mui-component-select-programId').click()
   const programtype2= cy.get('[data-value="5"]').click()
   const description=cy.get('.styles__DescriptionWrapper-sc-1ffx2oh-12 > .MuiFormControl-root > .MuiInputBase-root').type('new workshop')
   const searchcoordinator= cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
   searchcoordinator.type('Jonathan1 Quinn1',{delay:500}).click() 
      cy.wait(1000)      
      cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();     
      cy.get('#mui-component-select-siteId').click();
      cy.get('.MuiList-root > [tabindex="0"]').click({force:true});
      cy.get('.blue > .MuiButtonBase-root').click()
      cy.wait(2000); 

      return this;

      }

  Interview_Activist() {
    
   cy.wait(1000); 
   cy.get('#mui-component-select-programId').click()
   cy.get('[data-value="9"]').click()
   cy.get('.styles__DescriptionWrapper-sc-1ffx2oh-12 > .MuiFormControl-root > .MuiInputBase-root').type('New Interview Activist')
   const searchcoordinator_activist=cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
   searchcoordinator_activist.type('Jonathan1 Quinn1',{delay:500}).click() 
   cy.wait(1000)      
   cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();      
   cy.get('#mui-component-select-siteId').click()
   cy.get('.MuiList-root > [tabindex="0"]').click({force:true});
   cy.get('.blue > .MuiButtonBase-root').click()

   return this;

  }

  Orientation_Activist(){
    cy.wait(1000); 
    cy.get('#mui-component-select-programId').click()
    cy.get('[data-value="8"]').click()
    cy.get('.styles__DescriptionWrapper-sc-1ffx2oh-12 > .MuiFormControl-root > .MuiInputBase-root').type('New Orientation')    
    const searchcoordinator_activist=cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    searchcoordinator_activist.type('Jonathan1 Quinn1',{delay:500}).click() 
    cy.wait(1000)      
    cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();      
    cy.get('#mui-component-select-siteId').click()
    cy.get('.MuiList-root > [tabindex="0"]').click({force:true});
    const savebutton=cy.get('.blue > .MuiButtonBase-root').click()
    return this;
  }

  Orientation_Scholar(){
    cy.wait(1000); 
    cy.get('#mui-component-select-programId').click()
    cy.get('[data-value="7"]').click()
    cy.get('.styles__DescriptionWrapper-sc-1ffx2oh-12 > .MuiFormControl-root > .MuiInputBase-root').type('New Orientation')    
    const searchcoordinator_activist=cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    searchcoordinator_activist.type('Jonathan1 Quinn1',{delay:500}).click() 
    cy.wait(1000)      
    cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();      
    cy.get('#mui-component-select-siteId').click()
    cy.get('.MuiList-root > [tabindex="0"]').click({force:true});
    const savebutton=cy.get('.blue > .MuiButtonBase-root').click()
    return this;
  }

  Interview_Scholar(){
    cy.wait(1000); 
    cy.get('#mui-component-select-programId').click()
    cy.get('[data-value="16"]').click()
    cy.get('.styles__DescriptionWrapper-sc-1ffx2oh-12 > .MuiFormControl-root > .MuiInputBase-root').type('New Orientation')    
    const searchcoordinator_activist=cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    searchcoordinator_activist.type('Jonathan1 Quinn1',{delay:500}).click() 
    cy.wait(1000)      
    cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();      
    cy.get('#mui-component-select-siteId').click()
    cy.get('.MuiList-root > [tabindex="0"]').click({force:true});
    const savebutton=cy.get('.blue > .MuiButtonBase-root').click()
    return this;
  }

  Group_Tutoring_scholar(){
    cy.wait(1000); 
    cy.get('#mui-component-select-programId').click()
    cy.get('[data-value="17"]').click()
    cy.get('.styles__DescriptionWrapper-sc-1ffx2oh-12 > .MuiFormControl-root > .MuiInputBase-root').type('New Orientation')    
    const searchcoordinator_activist=cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    searchcoordinator_activist.type('Jonathan1 Quinn1',{delay:500}).click() 
    cy.wait(1000)      
    cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();      
    cy.get('#mui-component-select-siteId').click()
    cy.get('.MuiList-root > [tabindex="0"]').click({force:true});
    const savebutton=cy.get('.blue > .MuiButtonBase-root').click()
    return this;
    
  }

  Group_Tutoring_Activist(){
    cy.wait(1000); 
    cy.get('#mui-component-select-programId').click()
    cy.get('[data-value="18"]').click()
    cy.get('.styles__DescriptionWrapper-sc-1ffx2oh-12 > .MuiFormControl-root > .MuiInputBase-root').type('New Orientation')    
    const searchcoordinator_activist=cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    searchcoordinator_activist.type('Jonathan1 Quinn1',{delay:500}).click() 
    cy.wait(1000)      
    cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();      
    cy.get('#mui-component-select-siteId').click()
    cy.get('.MuiList-root > [tabindex="0"]').click({force:true});
    const savebutton=cy.get('.blue > .MuiButtonBase-root').click()
    return this;
   
  }
  

  
 
}

export default Coordinator;