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
   const tab = cy.get('[id="nav-tab-1"]')
    tab.click({force:true});
    const add = cy.get('[type="button"]').get('.FsowF').contains('Add Account').should('be.visible');
    add.click();
    cy.get('.kXMnzN')
    return this;
  }

  coor_form() {
    cy.get(':nth-child(2) > .MuiExpansionPanelSummary-root').click()
    cy.xpath("//input[@id='145']").type('Carla')
        cy.xpath("//input[@id='146']").type('Smith')
        cy.xpath("//input[@id='147']").type('Street 20')
        cy.xpath("//input[@id='150']").type('Florida')
        cy.xpath("//input[@id='151']").type('25987')
        const Activisstate = cy.get(':nth-child(6) > .styles__Wrapper-nrkjin-0 > .MuiFormControl-root > .MuiInputBase-root > #mui-component-select-0')
        Activisstate.click()
        Activisstate.get('[data-value="Arizona"]')
        Activisstate.click()
        cy.xpath("//input[@id='152']").type('dcalvarez@10pearls.com')
        cy.xpath("//input[@id='153']").type('6587895872') 
        
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(12) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2)').click()

        //Guardian Information
        
        cy.get(':nth-child(3) > .MuiExpansionPanelSummary-root').click()
        const title = cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(1) > .styles__Wrapper-nrkjin-0 > .MuiFormControl-root > .MuiInputBase-root > #mui-component-select-0')
        title.click()
        title.get('[data-value="Mrs"]')
        title.click()
        cy.xpath("//input[@id='156']").type('Isaías')
        cy.xpath("//input[@id='157']").type('Mondragón')
        cy.xpath("//input[@id='158']").type('street 90')
        cy.xpath("//input[@id='160']").type('Florida')
        cy.xpath("//input[@id='162']").type('25898')
        
        const ActivistGuardianstate = cy.get(':nth-child(7) > .styles__Wrapper-nrkjin-0 > .MuiFormControl-root > .MuiInputBase-root > #mui-component-select-0')
        ActivistGuardianstate.click()
        ActivistGuardianstate.get('[data-value="Georgia"]')
        ActivistGuardianstate.click()
        cy.xpath("//input[@id='163']").type('dicaalpa@hotmail.com.co')
        cy.xpath("//input[@id='164']").type('7895859682')
        cy.xpath("//input[@id='165']").type('3135242629')
        
        //emergency

        cy.get(':nth-child(4) > .MuiExpansionPanelSummary-root').click()

        cy.xpath("//input[@id='167']").type('William Smith')
        cy.xpath("//input[@id='168']").type('father')
         cy.xpath("//input[@id='169']").type('5487958795')
         cy.xpath("//input[@id='170']").type('7895869592')
         cy.xpath("//input[@id='171']").type('4598693582')

         //Demografic information

         cy.get(':nth-child(5) > .MuiExpansionPanelSummary-root').click()
         const gender= cy.get(':nth-child(5) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(1) > .styles__Wrapper-nrkjin-0 > .MuiFormControl-root > .MuiInputBase-root > #mui-component-select-0')
         gender.click()
         gender.get('[data-value="Female"]')
         gender.click()

         const hige= cy.get(':nth-child(2) > .styles__Wrapper-nrkjin-0 > .MuiFormControl-root > .MuiInputBase-root > #mui-component-select-0')
         hige.click()
         hige.get('[data-value="St X"]')
         hige.click()
         const grade= cy.get(':nth-child(3) > .styles__Wrapper-nrkjin-0 > .MuiFormControl-root > .MuiInputBase-root > #mui-component-select-0')
         grade.click()
         grade.get('[data-value="9th"]')
         grade.click()

         cy.get(':nth-child(5) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
         cy.get(':nth-child(7) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2)').click()
         cy.get(':nth-child(9) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
         cy.get(':nth-child(11) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()

         //ej informatiom
         cy.get(':nth-child(6) > .MuiExpansionPanelSummary-root').click()
         cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1)').click()
         cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(4)').type('Her interest in becoming famous came from having a supporting role in the movie My Little Girl. In 1991, she got her first job as a dancer and in 1993 she decided to pursue acting. She landed her first leading role in the film Selena, with which she became the first Latin actress to earn a million dollars and was also nominated for a Golden Globe for Best Actress. She also starred in the first installment of the Anaconda film series (1997). The following year, with the film Out of Sight (1998), she managed to collect two million dollars2 and also made one of the best performances of her career. In 1999 she made her debut as a singer with her single If You Had My Love, which was number one on the Billboard Hot 100 and with her album On the 6 (1999), enjoying great success in the international market.')
         cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(6)').type('famous came from having a supporting role in the movie My Littlfamous came from having a supporting role in the movie My Littlfamous came from having a supporting role in theHer interest in becoming famous came from having a supporting role in the movie My Little Girl. In 1991, she got her first job as a dancer and in 1993 she decided to pursue acting. She landed her first leading role in the film Selena, with which she became the first Latin actress to earn a million dollars and was also nominated for a Golden Globe for Best Actress. She also starred in the first installment of the Anaconda film series (1997). The following year, with the film Oufamous came from having a supporting role in the movie My Littlfamous came from having a supporting role in the movie My Littlfamous came from having a supporting role in the movie My Littlfamous came from having a supporting role in the movie My Littlt of Sight (1998), she managed to collect two million dollars2 and also made one of the best performances of her career. In 1999 she made her debut as a singer with her single If You Had My Love, which was number one on the Billboard Hot 100 and with her album On the 6 (1999), enjoying great success in the international market mous came from .')
         cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(8)').type('Her interest in becoming famous came from having a supporting role in the movie My Little Girl. In 1991, she got her first job as a dancer and in 1993 she decided to pursue acting. She landed her first leading role in the film Selena, with which she became the first Latin actress to earn a million dollars and was also nominated for a Golden Globe for Best Actress. She also starred in the first installment of the Anaconda film series (1997). The following year, with the film Oufamous came from having a supporting role in the movie My Littlfamous came from having a supporting role in the movie My Bill and with her albumBillboard Hot 100 and with her albumBillboard Hot 100 and with her albumBillboard Hot 100 and with her albumBillb Billboard Hot 100 and with her albumBillboard Hot 100 and with her albumBillboard Hot 100 and with her albumBillboard Hot 100 and with her albumBillboard Hot 100 and with her albumBillboard Hot 100 and with her album Billboard Hot 100 and with her albumBillboard Hot 100 and with her album Billboard Hot 100 and with her albumBillboard Hot 100 and with her albumBillboard Hot 100 and with her albumBillboard Hot 100 and with her albumBillboard Hot 100 and with her album')
         cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(10)').type('Her interest in becoming famous came from having a supporting role in the movie My Little Girl. In 1991, she got her first job as a dancer and in 1993 she decided to pursue acting. She landed her first leading role in the film Selena, with which she became the first Latin actress to earn a million dollars and was also nominated for a Golden Globe for Best Actress. She also starred in the first installment of the Anaconda film series (1997). The following year, with the film Oufamous came from having a supporting role in the movie My Littlfamous came from having a supporting role in the movie My Bill and with her albumBillboard Hot 100 and with her album')
         cy.get(':nth-child(6) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > :nth-child(12) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2)').click()
        
         //documents
         cy.get(':nth-child(7) > .MuiExpansionPanelSummary-root').click()
         cy.get('.styles__Wrapper-kvo6fk-0 > .MuiTypography-root').click()
         cy.get('.MuiGrid-root > .MuiFormGroup-root > .MuiFormControlLabel-root').click()
         cy.get('.modal-footer > .styles__ButtonsContainer-ib9tfx-1 > .blue > .MuiButtonBase-root').click()
         
         //letter recomendation
         //cy.get(':nth-child(8) > .MuiExpansionPanelSummary-root').click()

         //certification
         cy.get(':nth-child(9) > .MuiExpansionPanelSummary-root').click()
         cy.get(':nth-child(9) > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiExpansionPanelDetails-root > .styles__Wrapper-sc-1exyr8r-0 > .MuiBox-root > .styles__StyledGrid-sc-1exyr8r-2 > .MuiGrid-grid-sm-12 > .MuiFormControl-root > .MuiFormGroup-root > .MuiFormControlLabel-root').click()
         
         //Autentication
         cy.get(':nth-child(10) > .MuiExpansionPanelSummary-root').click()
         cy.get('#UserNameAccount').type('pompilio20')
         cy.get('#PasswordAccount').type('pompilio21')

        }

  submitform() {
    const save = cy.xpath("//span[contains(text(),'Save')]");
    save.click();
    return this;
  }
}

export default Coordinator;
