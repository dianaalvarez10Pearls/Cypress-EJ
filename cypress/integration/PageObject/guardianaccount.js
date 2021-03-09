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

  go_account() {
    const account =cy.get('[href="/accounts"]')
    account.click();
   const tab = cy.get('#nav-tab-2 > .MuiTab-wrapper')
    tab.click({force:true});
    const add = cy.get('[type="button"]').get('.FsowF').contains('Add Account').should('be.visible');
    add.click();
    cy.get('.kXMnzN')
    return this;
  }

  coor_form() {

    cy.get(':nth-child(2) > .MuiExpansionPanelSummary-root > .MuiExpansionPanelSummary-content').click()  
    const guardiantitle = cy.get(':nth-child(1) > .styles__Wrapper-nrkjin-0 > .MuiFormControl-root > .MuiInputBase-root > #mui-component-select-0')
        guardiantitle.click()
        guardiantitle.get('[data-value="Mr"]')
        guardiantitle.click()

        cy.get('.MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(2) > .styles__StyledFormControl-sc-3zfbuh-0').type('Sherlock')
        cy.get('.MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(3) > .styles__StyledFormControl-sc-3zfbuh-0').type('Holms')
        cy.get('.MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(4) > .styles__StyledFormControl-sc-3zfbuh-0').type('calle 30')
        cy.get(':nth-child(6) > .styles__StyledFormControl-sc-3zfbuh-0').type('Medellin')
        cy.get(':nth-child(8) > .styles__StyledFormControl-sc-3zfbuh-0').type('12345')
        cy.get(':nth-child(2) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(7)')
        const state = cy.get(':nth-child(2) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(7)')
        state.click()
        state.get('[data-value="Georgia"]')
        state.click()
        cy.get(':nth-child(9) > .styles__StyledFormControl-sc-3zfbuh-0').type('dcalvarez@10pearls.com')
        cy.get(':nth-child(10) > .styles__StyledFormControl-sc-3zfbuh-0').type('3136524290')
        cy.get(':nth-child(11) > .styles__StyledFormControl-sc-3zfbuh-0').type('5344920925')
        cy.get(':nth-child(14) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get('#mui-component-select-subjectId')

        //Guardian information

        cy.get(':nth-child(3) > .MuiExpansionPanelSummary-root').click()
        cy.get(':nth-child(3) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(3) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(3) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(6) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(3) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(8) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2)').click()
    
        //computer y internet
        cy.get(':nth-child(4) > .MuiExpansionPanelSummary-root').click()
        cy.get(':nth-child(4) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(4) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(4) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(6) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(4) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(8) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        
        //demografic information
        cy.get(':nth-child(5) > .MuiExpansionPanelSummary-root').click()
        cy.get(':nth-child(5) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(5) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2)').click()
        cy.get(':nth-child(5) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(6) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()

        //school interaction
        cy.get(':nth-child(6) > .MuiExpansionPanelSummary-root').click()
        cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(6) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(8) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        cy.get(':nth-child(10) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
        

        //ej information
        cy.get(':nth-child(7) > .MuiExpansionPanelSummary-root').click()
        cy.get(':nth-child(7) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(4)').type('hello')
        cy.get(':nth-child(7) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(2)').type('hello')
       
        //child information
        cy.get(':nth-child(8) > .MuiExpansionPanelSummary-root').click()
        cy.get('.MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(1) > .styles__StyledFormControl-sc-3zfbuh-0').type('Shamantha')
        cy.get('.MuiGrid-grid-lg-12 > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(2) > .styles__StyledFormControl-sc-3zfbuh-0').type('Acevedo')
        cy.get('.MuiGrid-grid-lg-12 > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(3) > .styles__StyledFormControl-sc-3zfbuh-0').type('brother')
        cy.get('.MuiGrid-grid-lg-12 > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(4) > .styles__StyledFormControl-sc-3zfbuh-0').type('dicaalpa@gmail.com')
        cy.get('.MuiGrid-grid-lg-12 > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(5) > .styles__StyledFormControl-sc-3zfbuh-0').type('5897895894')
        const schoolgender= cy.get('.MuiGrid-grid-lg-12 > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(6)')
        schoolgender.click()
        schoolgender.get('[data-value="Female"]')
        schoolgender.click()
        const schoolselect= cy.get('.MuiGrid-grid-lg-12 > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(7)')
        schoolselect.click()
        schoolselect.get('[data-value="Brandeis Elementary School"]')
        schoolselect.click()
        cy.get(':nth-child(9) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2)').click()
        cy.get('.MuiGrid-grid-lg-12 > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(11)').type('hello')
        cy.get('.MuiGrid-grid-lg-12 > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(13)').type('hello')
       
        //Documents
        cy.get(':nth-child(9) > .MuiExpansionPanelSummary-root').click()
        cy.get('.styles__StyledGrid-sc-1exyr8r-2 > .MuiGrid-root > .styles__Wrapper-kvo6fk-0 > .MuiTypography-root').click()
        cy.get('.MuiGrid-root > .MuiFormGroup-root > .MuiFormControlLabel-root').click()
        cy.get('.modal-footer > .styles__ButtonsContainer-ib9tfx-1 > .blue > .MuiButtonBase-root').click()


        //autentication
        cy.get(':nth-child(10) > .MuiExpansionPanelSummary-root').click()
        cy.get('.MuiExpansionPanelDetails-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(1) > .styles__StyledFormControl-sc-3zfbuh-0').type('pompilio')
        cy.get('.MuiExpansionPanelDetails-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(2) > .styles__StyledFormControl-sc-3zfbuh-0').type('pompilio')


  }

  submitform() {
    const save = cy.xpath("//span[contains(text(),'Save')]");
    save.click();
    return this;
  }
}

export default Coordinator;
