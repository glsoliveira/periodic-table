describe("Home Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000");
  });

  it("allows input to be typed and enables the button", () => {
    cy.get('input[placeholder="Digite seu nome"]').type("John");
    cy.get('input[placeholder="Digite seu sobrenome"]').type("Doe");
    cy.get("button").should("not.be.disabled");
  });

  it("renders highlights when appropriate", () => {
    cy.get('input[placeholder="Digite seu nome"]').type("Hello H");
    cy.contains("H").should("exist");
  });

  it('displays the DefinitionBox and HighLight only when there are elements', () => {
    cy.intercept('POST', '/elements?symbols=Ga,S').as('getElements');

    cy.get('input[placeholder="Digite seu nome"]').type('Gabriel');
    cy.get('input[placeholder="Digite seu sobrenome"]').type('Sala');
    cy.get('button').contains('Breakify').click();
    
    cy.get('.highlight-box', { timeout: 30000 }).should('exist');
    cy.get('.definition-box', { timeout: 30000 }).should('exist');
  });
});
