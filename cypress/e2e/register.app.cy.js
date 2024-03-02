describe('Register User', () => {
    it('Visits register/login page', () => {
        cy.visit('/register-login.html');

        // Your Cypress test
        cy.get('h1').should('contain', 'Register/Login');

        // Register
        cy.get('#username').type('username');
        cy.get('#password').type('password');
        cy.get('button').click();
        cy.visit('/dashboard.html')
        cy.get('h1').should('contain', 'Welcome to the Dashboard');
        // cy.visit('https://nodejs.org/en')
    });
    // Looks like it working, creating a user, changing user password,
    // Hopefully this is good, the other test cases are very simple and
    // don't think is useful to mock, like make the test go to the dashboard,
    // see if it contains some text and visit one of the links.
    // Hopefully this is a normal thing, that when you mock data,
    // you can't use the website as normal you need to comment out the
    // mocking section in app.js
});
