Given("GO TO API", () => {});
When("Execute Request", () => {});

Then("Get response", () => {
  
  const loginData = require("../../fixtures/login.json");
  cy.request({
    method: "POST",
    url: "https://ej-qa-be.azurewebsites.net/api/Auth/login",
    body: loginData,
    headers: {
      "content-type": "application/json",
    }
  })
    .then((resp) => {
      expect(resp.status).to.eq(200),
        //expect(resp.body.result).to.not.eq(null),
        expect(resp.body.result.firstName).to.eq("Fernando"),
        expect(resp.body.result.role).to.eq("Administrator");
      const Auth = resp.body.result.authToken;
      localStorage.setItem("token", Auth);
    })

   
    
    
})