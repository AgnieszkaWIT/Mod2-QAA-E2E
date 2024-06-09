describe('QAA E2E', () => {
  
  it('Test 1', () => {
    cy.signIn("user888@gmail.com", "1234567890")
    cy.logOut();
  })

  it('Test 2', () => {
    cy.signIn("testowyqa@qa.team", "QA!automation-1")
    cy.logOut();
  })

})