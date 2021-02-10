describe('Search test', function(){
  it('Search with results', function(){
    cy.visit('http://localhost:3000/search');
    cy.get('.search__input').type('The Hateful Eight');
    cy.get('#btnSearch').click();
    cy.get('.movie__title').contains('The Hateful Eight');
    cy.get('.search__input').clear().type('Star Wars: Episode II - Attack of the Clones');
    cy.get('#btnSearch').click();
  });
});