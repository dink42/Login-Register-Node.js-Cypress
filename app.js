const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const mockito = require('mockito');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Sample JSON file to store user data
const usersDataFile = 'users.json';

/* --- Normal function of site without mocking data --- */

// Load existing user data or create an empty array
let usersData = [];
if (fs.existsSync(usersDataFile)) {
    const data = fs.readFileSync(usersDataFile);
    usersData = JSON.parse(data);
}

/* --- Normal function of site without mocking data --- */

/* --- Mocked Data --- */
/* I changed the variable name so the app works with cypress mocking and
    just running the app normally wich it didn't before. I am a bit confused by it.
    I feel like I should make a new js file but witch the mock version and change
    the other variables to the right ones in the mock one too, but it worked this
    way so im not sure if this is wrong */

// Mocked user data
const mockedUsersData = [
    { username: 'mockUser1', password: 'mockPassword1' },
    { username: 'mockUser2', password: 'mockPassword2' },
];
if (fs.existsSync(mockedUsersData)) {
    const mockData = fs.readFileSync(mockedUsersData);
    mockedUsersData = JSON.parse(mockData);
}

/* --- Mocked Data --- */

// Method to serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Serve the home page with navigation
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

// Serve the registration and login page
app.get('/register-login', (req, res) => {
    res.sendFile(__dirname + '/register-login.html');
});

// Handle registration and login form submission
app.post('/register-login', (req, res) => {
    const { action, username, password } = req.body;

    if (action === 'register') {
        // Check if the username is already taken
        const isUsernameTaken = usersData.some(u => u.username === username);

        if (isUsernameTaken) {
            res.send('<h1>Username already taken. Please choose another.</h1>');
        } else {
            // Save the new user to the data
            usersData.push({ username, password });

            // Save the updated data to the JSON file
            fs.writeFileSync(usersDataFile, JSON.stringify(usersData, null, 2));

            req.session.user = username; // Store the username in the session
            res.redirect('/dashboard'); // Redirect to the dashboard after registration
        }
    } else if (action === 'login') {
        // Check if user exists in the data
        const user = usersData.find(u => u.username === username && u.password === password);

        if (user) {
            req.session.user = username; // Store the username in the session
            res.redirect('/dashboard'); // Redirect to the dashboard after login
        } else {
            res.send('<h1>Invalid username or password.<h1>');
        }
    } else {
        res.send('<h1>Invalid action.<h1>');
    }
});


// Handle sign-out
app.get('/sign-out', (req, res) => {
    req.session.destroy(); // Destroy the session to log out
    res.redirect('/');
});

// Serve the dashboard page (accessible only when logged in)
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname + '/dashboard.html');
    } else {
        res.redirect('/register-login'); // Redirect to login if not logged in
    }
});

// Serve the change password page
app.get('/change-password', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '/change-password.html'));
    } else {
        res.redirect('/register-login'); // Redirect to login if not logged in
    }
});

// Handle password change form submission
app.post('/change-password', (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const username = req.session.user;

    // Find the user in the data
    const userIndex = usersData.findIndex(u => u.username === username && u.password === oldPassword);

    if (userIndex !== -1) {
        // Update the password
        usersData[userIndex].password = newPassword;

        // Save the updated data to the JSON file
        fs.writeFileSync(usersDataFile, JSON.stringify(usersData, null, 2));

        res.send('<h1>Password changed successfully!<h1>');
    } else {
        res.send('<h1>Incorrect old password. Please try again.<h1>');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});