describe('Test a view', () => {
  beforeEach(async () => {
    if (!window.navigator || !navigator.serviceWorker) {
      return null;
    }
    const registrations = await navigator.serviceWorker.getRegistrations();
    return Promise.all(
      registrations.map((registration) => {
        return registration.unregister();
      }),
    );
  });

  it('Should show "This is my page" on the /about page', () => {
    cy.visit('/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('undefined-cookies', 'true');
      },
    });
    cy.wait(500);
    cy.get('body').then(($body) => {
      const $prompt = $body.find('[data-cy="reload-prompt"]');
      if ($prompt.length) {
        const $btn = $prompt.find('[data-cy="close"]');
        if ($btn.length) {
          cy.wrap($btn).click();
        }
      }
    });
    cy.get('.layout-header a[href="/about"]').click();
    cy.get('#desktop-localization').find('select').select('en');
    cy.get('main').contains('This is my page.');
  });

  it('Should show "benim sayfam" after selecting "tr" from language dropdown', () => {
    cy.visit('/about', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('undefined-cookies', 'true');
      },
    });
    cy.wait(500);
    cy.get('.layout-header a[href="/about"]').click();
    cy.get('#desktop-localization').find('select').select('tr');
    cy.wait(1000);
    cy.get('main').contains('Benim sayfam.');
  });
});
