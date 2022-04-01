describe("Quotes App", () => {
  beforeEach(() => {
    /**
     * Each test needs fresh state!
     * How do we "reset" state in React?
     * We're gonna refresh the page!
     * Every test must be able to work in isolation
     */
    cy.visit("http://localhost:3000/pizza"); // If you're on a different port this has to change
  })
  it("Sanity check to make sure tests work", () => {
    // "it" is a test
    // "expect" is an assertion
    // There can (and often are) multiple assertions per test
    expect(2 + 2).not.to.equal(5);
    expect(9 + 17).to.equal(26);
    expect({}).not.to.equal({}); // === strict equality
  })
   // Helper time!!
 const nameInput = () => cy.get("input[name=firstName]");
 const oliveToppingInput = () => cy.get("input[name=olives]");
 const tomatoesToppingInput = () => cy.get("input[name=tomatoes]");
 const mushroomsToppingInput = () => cy.get("input[name=mushrooms]");
 const onionsToppingInput = () => cy.get("input[name=onions]");
 const specialInstructionsInput = () => cy.get("input[name=special]");
 const submitBtn = () => cy.get("button[id='order-button']");

 it("The proper elements are showing", () => {
  nameInput().should("exist");
  oliveToppingInput().should("exist");
  tomatoesToppingInput().should("exist");
  mushroomsToppingInput().should("exist");
  onionsToppingInput().should("exist");
  specialInstructionsInput().should("exist");
  submitBtn().should("exist");

  cy.contains("Add to Order").should("exist");
  })

  it("can add text to the boxes", () => {
    nameInput()
     .should("have.value", "")
     .type("Lorem ipsum")
     .should("have.value", "Lorem ipsum");
    specialInstructionsInput()
     .should("have.value", "")
     .type("Lorem")
     .should("have.value", "Lorem")
  }) 

  it("Can check toppings", () => {
    oliveToppingInput()
    .check()
    .should("be.checked", true)
    tomatoesToppingInput()
    .check()
    .should("be.checked", true)
    mushroomsToppingInput()
    .check()
    .should("be.checked", true)
    onionsToppingInput()
    .check()
    .should("be.checked", true)
  })

  it("Can Submit Form", () => {
    nameInput()
     .should("have.value", "")
     .type("Joe")
     .should("have.value", "Joe");
    specialInstructionsInput()
     .should("have.value", "")
     .type("extra onions")
     .should("have.value", "extra onions")
    submitBtn()
     .click()
  }) 

})