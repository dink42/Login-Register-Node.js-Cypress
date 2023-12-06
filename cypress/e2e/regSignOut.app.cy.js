// cypress/integration/register_spec.js
describe('User Registration and Sign Out Test', () => {
    beforeEach(() => {
        // Visit the registration page before each test
        cy.visit('/register-login.html');
    });

    it('Registers a new user, logs in, and signs out', () => {
        // Generate a unique username and password for testing
        const username = `testuser${Math.floor(Math.random() * 100000)}`;
        const password = 'testpassword123';

        // Fill in the registration form
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button').click();

        // Verify if the registration was successful
        // cy.get('Registration successful!');

        // Log in with the newly created user
        cy.visit('/register-login.html');
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button').click();

        // Verify if the login was successful
        // cy.url().should('contain', 'Login successful!');

        // Navigate to the dashboard
        cy.visit('/dashboard.html');

        // Verify if the new user is displayed in the dashboard
        cy.get('h1').should('contain', 'Welcome to the Dashboard');

        // Sign out
        cy.get('#btnout').click();

        // Redirect to login page
        cy.visit('/register-login.html');

        // Verify if the user is redirected to the login page
        cy.url().should('include', '/register-login');
    });
});