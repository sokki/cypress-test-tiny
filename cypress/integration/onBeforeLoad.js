describe('onBeforeLoad', function(){

  it('inline onBeforeLoad', function(){
    cy.visit('/index.html', {
      onBeforeLoad (win) {
        win.mocked = 'mocked'
      }
    });
    cy.get('body')
    .should('contain', 'mocked')
    .should('not.contain', 'nope')
  })

  it('onBeforeLoad from overwrite', function(){
    cy.visit('/index.html');
    cy.get('body')
      .should('contain', 'mocked')
      .should('not.contain', 'nope')
  })
})
