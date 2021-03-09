<reference types="cypress" />;
import React from "react";
import Loginpage from "./Loginpage";
Cypress.env("RETRIES", 0);

const lp = new Loginpage();
class Apayments {
  Ativist_Login() {
    cy.visit("https://ej-qa-web.azurewebsites.net/");
    Cypress.Cookies.preserveOnce("sessionid");
    const testData = require("../../fixtures/payments.json");
    testData.forEach((testDataRow) => {
      const data = {
        username: testDataRow.username,
        password: testDataRow.password,
      };
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
        
      });
      return this;
    });
  }

  Go_Payments() {
    const pay = cy.get("[href='/payments']").should("be.visible");
    pay.click({ force: true });
    pay.wait(4000);
    //cy.xpath("(//div[contains(@class, 'paypal-button-text true')])[1]").click()
    cy.get("iframe:visible").invoke("show")
    cy.get("iframe:visible").within(($iframe) => {
      const $body = $iframe.contents();
      cy.wrap($body.find('[data-funding-source="paypal"]'))
        //.focus()
        .click({ force: true });
      cy.wait(2000);
    });
    //if (Cypress.env("FAIL")) {
     // Cypress.currentTest.retries(2);
    //}
    //return this;
  }

  Make_Payment() {
    const testData = require("../../fixtures/payments.json");
    testData.forEach((testDataRow) => {
      const data = {
        email: testDataRow.email,
        cardNumber: testDataRow.cardNumber,
        expirationDate: testDataRow.expirationDate,
        postalCode: testDataRow.postalCode,
        securityCode: testDataRow.securityCode,
        phoneNumber: testDataRow.phoneNumber,
        firstName: testDataRow.firstName,
        lastName: testDataRow.lastName,
        line1: testDataRow.line1,
        city: testDataRow.city,
        state: testDataRow.state,
        country: testDataRow.country,
      };

      cy.window().then((win) => {
        cy.stub(win, "open").as("windowOpen").returns(win);
      });

      cy.focused("[class=' desktop js ']").first().focus().click();

      const em = cy.find("[id='email']").invoke("show");
      em.click();
      context(`Generating a test for ${data.email}`, () => {
        em.type(data.email);

        const exp = cy
          .xpath(
            "//div[@class='MuiContainer-root styles__StyledContainer-besxrb-1 esNJCQ']"
          )
          .should("be.visible");
        exp.click();
        exp.type(`${data.expirationDate}`);
        const sc = cy.xpath(
          "//div[@class='MuiContainer-root styles__StyledContainer-besxrb-1 esNJCQ']"
        );
        sc.click();
        sc.type(`${data.securityCode}`);
                  Cypress.env('RETRIES', 2);
      
        return this;
      });     
    });        
  }  

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
        cy.wait(3000);
        cy.get('[title="Payments"] > .styles__StyledNavLink-ay6lgn-1 > .material-icons').click()
        cy.wait(3000);
        cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()  
        cy.wait(2000); 
        cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click()
        cy.wait(2000);
        cy.xpath("//li[contains(text(),'Mark as Paid')]").click()

        cy.wait(2000);
        const select=cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()  
        cy.wait(2000); 
        const pay=cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click()
        cy.wait(2000);
        cy.xpath("//li[contains(text(),'Mark as Waived')]").click()

        cy.wait(2000);
        cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()         
        
        cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click()
        cy.wait(2000);
        cy.xpath("//li[contains(text(),'Mark as Not Paid')]").click()

        cy.wait(2000);
        cy.get('tbody>tr').eq(0).find('td').eq(0).find('input').should("be.visible").click()  
        cy.wait(2000); 
        cy.get('.styles__StyledBtnDropdown-sc-1fd4ltf-3 > .MuiButton-label > .material-icons').click()
        cy.wait(2000);        
     
        return this;
        });
    });
  }
}

export default Apayments;
