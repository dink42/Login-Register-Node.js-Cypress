describe('User Registration Test', () => {
    beforeEach(() => {
        // Visit the registration page before each test
        cy.visit('/register-login.html');
    });

    it('Registers a new user and prevents duplicate username', () => {
        // Generate a unique username and password for testing
        const username = `testuser${Math.floor(Math.random() * 100000)}`;
        const password = 'testpassword123';

        // Fill in the registration form
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button').click();

        /* Wich I could find how to get the res.send conditonals to verify sucess */

        cy.visit('dashboard.html');
        cy.get('#btnout').click();

        // Attempt to register the same username again
        cy.visit('/register-login.html');
        cy.get('#username').type(username);
        cy.get('#password').type('anotherpassword');
        cy.get('button').click();

        // Check no errors, can't get res.send User already taken, in any of the test, wich is sad
    });
});