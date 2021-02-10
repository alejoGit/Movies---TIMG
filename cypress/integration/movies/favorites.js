describe('Add to favorites test', function(){
  it('Search with results', function(){
    cy.visit('http://localhost:3000/search');
    cy.get('.search__input').type('The Hateful Eight');
    cy.get('#btnSearch').click();
    cy.get('#movie-273248').click();
    cy.get('.favorite__btn').click().should(() => {
      expect(localStorage.getItem('favorites')).to.eq('[{"adult":false,"backdrop_path":"/7gfDVfaw0VaIkUGiEH13o3TIC7A.jpg","belongs_to_collection":null,"budget":44000000,"genres":[{"id":80,"name":"Crime"},{"id":18,"name":"Drama"},{"id":9648,"name":"Mystery"},{"id":37,"name":"Western"}],"homepage":"http://thehatefuleight.com","id":273248,"imdb_id":"tt3460252","original_language":"en","original_title":"The Hateful Eight","overview":"Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.","popularity":22.907,"poster_path":"/cB932BToOpAGGnYgbzXvyfoiEwM.jpg","production_companies":[{"id":308,"logo_path":"/e8F3mQM7DkJ5SfYYDp8FYzPBOGX.png","name":"The Weinstein Company","origin_country":"US"},{"id":215,"logo_path":"/tQyeqkCj24krhY2W8qeAztcOS37.png","name":"Double Feature Films","origin_country":"US"},{"id":1811,"logo_path":null,"name":"FilmColony","origin_country":""}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2015-12-25","revenue":155760117,"runtime":188,"spoken_languages":[{"english_name":"Spanish","iso_639_1":"es","name":"Español"},{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released","tagline":"No one comes up here without a damn good reason.","title":"The Hateful Eight","video":false,"vote_average":7.7,"vote_count":10745}]')
    });
    cy.get('.favorite__btn').contains('Quitar de favoritos ★');
    cy.get('[href="/favorites"]').click();
  });
});
