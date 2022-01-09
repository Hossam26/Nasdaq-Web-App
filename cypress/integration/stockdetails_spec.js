
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("stock details",()=>{
    let ticker="AAPL";
  it("check stock details page and go to company's website",()=>{
    //open Explore page
    cy.visit("http://localhost:3000/");
    //search for a specific stock
    cy.findByPlaceholderText(/Search by stock ticker/i).type(ticker, {
      force: true,
    });
    //click on card to go to stock details
    cy.findByText(ticker).click({ force: true });
    //click on website button
    cy.findByText(/Website/i).scrollIntoView().click({force:true});
  })
})