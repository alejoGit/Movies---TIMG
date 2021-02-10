describe('Home test', function(){
  it('Results', function(){
    cy.visit('http://localhost:3000');
    cy.get('#currentPage').contains('1');
    cy.get('#btnLoadMore').click();
    cy.get('#currentPage').contains('2');
    cy.get('#btnLoadMore').click();
    cy.get('#currentPage').contains('3');
    cy.get('.filter__select').select('top_rated');
    cy.wait(500);
    cy.get('#currentPage').contains('1');
  });
});