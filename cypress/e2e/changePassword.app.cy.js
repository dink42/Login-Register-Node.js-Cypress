describe('Change the password', () => {
  it('Visits the dashboard and changes password', () => {
    cy.visit('/dashboard.html');

    // Cypress test
    cy.get('h1').should('contain', 'Welcome to the Dashboard');

    // Change Password
    cy.visit('/change-password.html');
    cy.get('#oldPassword').type('oldPassword123');
    cy.get('#newPassword').type('newPassword123');
    cy.get('button').click();
  });
});