describe('Test a view', () => {
  it('Should show "This is my page" on the /about page', () => {
    cy.visit('/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('undefined-cookies', 'true');
      },
    });
    cy.wait(500);
    cy.get('.layout-header a[href="/about"]').click();
    cy.get('main').contains('This is my page.');
  });

  it('Should show "benim sayfam" after selecting "tr" from language dropdown', () => {
    cy.visit('/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('undefined-cookies', 'true');
      },
    });
    cy.wait(500);
    cy.get('.layout-header a[href="/about"]').click();
    cy.get('#desktop-localization').find('select').select('tr');
    cy.wait(500);
    cy.get('main').contains('Benim sayfam.');
  });
  it('Should close prompt if it appears', () => {
    cy.visit('/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('undefined-cookies', 'true');
      },
    });
    cy.wait(500);
    cy.get('body').then(($body) => {
      if ($body.find('[data-cy="reload"]').length) {
        cy.get('[data-cy="close"]').click();
      }
    });
    cy.get('.layout-header a[href="/about"]').click();
    cy.get('#desktop-localization').find('select').select('tr');
    cy.get('main').contains('Benim sayfam.');
  });
});
