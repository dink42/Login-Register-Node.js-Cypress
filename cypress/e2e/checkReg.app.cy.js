describe('User Registration Test', () => {
    beforeEach(() => {
        // Visit the registration page before each test
        cy.visit('/register-login.html');
    });

    it('Registers a new user', () => {
        // Generate a unique username and password for testing
        const username = `testuser${Math.floor(Math.random() * 100000)}`;
        const password = 'testpassword123';

        // Fill in the registration form
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button').click();


        // Navigate to the dashboard (assuming successful registration redirects to the dashboard)
        cy.visit('/dashboard.html');

        // Verify if the new user is displayed in the dashboard
        cy.get('h1').should('contain', 'Welcome to the Dashboard');
    });

    it('Logs in an existing user', () => {
        // Assuming you have a registered user (mock data or from a previous test)
        const existingUser = { username: 'existinguser', password: 'existingpassword' };

        // Fill in the login form
        cy.get('#username').type(existingUser.username);
        cy.get('#password').type(existingUser.password);
        cy.get('button').click();

        // Navigate to the dashboard
        cy.visit('/dashboard.html');

        // Verify if the existing user is displayed in the dashboard
        cy.get('h1').should('contain', 'Welcome to the Dashboard');
    });
});
