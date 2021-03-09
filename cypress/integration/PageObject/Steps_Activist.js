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

 
    
  go_asigns_coordinator() {

    cy.wait(1000);
    cy.get('[title="Applications"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click({force:true});
    cy.wait(4000);
        
    cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()
    cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click({force:true});
    cy.get('.active > :nth-child(4)').click({force:true})    
    const find = cy.xpath("//div[@class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl']//input[@placeholder='Search']");
      find.click();
      find.type("jonathan");
      const select = cy.xpath("//li[@id='12']").contains("Jonathan1 Quinn1").click({ timeout: 4000 });     
    
    return this;
  }

  Change_Status_Activist() {
   

    cy.wait(3000);
    cy.get('[title="Applications"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click({force:true});
    cy.wait(7000);
   // cy.get('tbody > :nth-child(1) > :nth-child(1)').click({force:true});
    //cy.wait(2000)        
    cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()
    const review=cy.get('[title="Application"] > .MuiButton-label > .material-icons').click()
    cy.get('#Application').click()
    cy.wait(7000)   

    const loopLength = 14;
    for (var i = 0; i <= loopLength; i++) {
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click({force:true});
    cy.wait(2000)        
    cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()
    cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click({force:true});
    cy.xpath("//li[contains(text(),'Accept')]").click({force:true})  

           }
       
      };

      go_asigns_Scholar(){

        cy.wait(1000);
    cy.get('[title="Applications"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click({force:true});
    cy.wait(2000);

        cy.get('#nav-tab-1 > .MuiTab-wrapper').click()
        cy.wait(5000);
        cy.get('.gxFPRc > .styles__GridLabel-jgfjsf-5').click({force:true});
        cy.wait(5000) 
        cy.get(':nth-child(1) > .col-selected').click()  
        cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click({force:true});
        cy.get('.active > :nth-child(2)').click({force:true})    
        const find = cy.xpath("//div[@class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl']//input[@placeholder='Search']");
        find.click();
        find.type("jonathan");
        const select = cy.xpath("//li[@id='12']").contains("Jonathan1 Quinn1").click({ timeout: 4000 });       
                
           
          };


          Change_Status_Scholar() {
            
            
                const testData = require("../../fixtures/status.json");
                testData.forEach((testDataRow) => {
                  const data = {
                    name: testDataRow.name,                    
                  };

                  cy.wait(1000);
                  cy.get('[title="Applications"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click({force:true});
                  cy.wait(5000);
                  cy.get('#nav-tab-1 > .MuiTab-wrapper').click()
                  cy.wait(5000);
                  cy.get('.jUZHje').click()
                  const FN=cy.get('.search-container')                  
                  context(`Generating a test for ${data.name}`, () => {
                    FN.type(data.name) 
                    cy.get('#default-search').type("{enter}", { force: true });
                    FN.wait(5000);                    
                    cy.get('.col-selected').click()
                    FN.wait(3000);
                    cy.get('[title="Application"]').click()
                    cy.wait(5000)
                    cy.get('#Application').click()
                    cy.wait(5000)
                    cy.get('.col-selected').click()
                    cy.wait(3000)
                    cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons')
                    cy.xpath("//li[contains(text(),'Accept')]").click({force:true}) 

                    cy.wait(5000)
                    cy.get('.col-selected').click()
                    cy.wait(5000)
                    cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons')
                    cy.xpath("//li[contains(text(),'Accept')]").click({force:true})

                    cy.wait(5000)
                    cy.get('.col-selected').click()
                    cy.wait(5000)
                    cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons')
                    cy.xpath("//li[contains(text(),'Accept')]").click({force:true})

                    cy.wait(5000)
                    cy.get('.col-selected').click()
                    cy.wait(3000)
                    cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons')
                    cy.xpath("//li[contains(text(),'Accept')]").click({force:true})

                    //cy.wait(3000)
                    //cy.get('.col-selected').click()
                    //cy.wait(3000)
                    //cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons')
                    //cy.xpath("//li[contains(text(),'Accept')]").click({force:true})


                  
                    
                    
                                    
                
                           
                    return this;
                    });
                });
              
            
          }
       
}

export default Coordinator;