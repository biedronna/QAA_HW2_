describe("User can visit GoIt", () => {

  beforeEach("Go to page", () => {                       

      cy.visit("https://www.edu.goit.global/account/login")
  });
  
 //Test 1:
  it("First log in and log out", () =>  {

      cy.get('#user_email').type("user888@gmail.com")    //wpisuje email
      cy.get('#user_password').type("1234567890")        //wpisuje hasło
      cy.get('.eckniwg2').click()                     //klika Log In

      cy.get('#open-navigation-menu-mobile').click()    //klika menu w prawym górnym rogu
      cy.get(':nth-child(12) > .next-bve2vl').click()     //klika Log out
  });


  //Test 2:
  it("Second log in and log out", () =>  {

       cy.get('#user_email').type("testowyqa@qa.team")     //wpisanie maila
       cy.get('#user_password').type("QA!automation-1")    //wpisanie hasła
       cy.get('.eckniwg2').click()                       //klika Log in

      cy.get('#open-navigation-menu-mobile').click()    //otwiera menu 
      cy.wait(1000)                                    //opóznienie następnej linijki o 1000ms
      cy.get(':nth-child(8) > .next-bve2vl').click()  //kliknięcie Log out 
     });


});
