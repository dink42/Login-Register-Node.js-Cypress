# How to make a node.js app with cypress and E2E testing.

> [!NOTE]
> Welcome to this project!
> You should look at the code also while following instructions. The package.json file will hold all your dependecies, if you upload a project don't upload the node_modules folder. Make a .gitignore and write /node-modules inside it. Also if you clone a project with a package.json file. All you need to do is npm i install iside the folder you want to create your app and all the dependecies will be installed.
> Here are some instructions for those intresting in creating a similair project!

## About the project

> This project is made in node.js, and e2e testing in cypress, mockito is also used to mock data in some test cases. I will go throught the steps if you want to create a project like this. First of all, make sure you got node.js installed, and an IDE of your choice, i use vscode. You should have basic knowledge of JavaScript and some HTML. It would help if you tried some smaller projects in Jest too. The prerequirments you need to make a project like this is as follows.

### Steps to follow after you got node.js and an IDE.

1. Run

       npm init
   
   - In the folder you going to make the project, it will create a package.json file with all your dependencies.
   
           npm i express
   
           npm i body-parser
   
           npm i -g nodemon

   - I would install nodemon globally as it's good to have.
            
2. For testing the project.
   
       npm i --save-dev cypress
   
   - We only need cypress in development. Mockito is for mocking ex user data automatically to the cypress tests
   
           npm i mockito
            
3. If you want to start the project just run any of these commands.
   
       nodemon app.js
   
   - If you want to see if evertthing works without cypress nodemon app.js is the way to go.
     
           npx cypress open

    - To run your test cases in cypress, run the command over this text, a UI will come up and click on E2E Testing.
        - A folder named cypress will be created with a folder e2e, inside that folder you write your test cases.

### Additional information

In the beginning of your main js file you should have these requirments.

    ${const express = require('express');}

    const bodyParser = require('body-parser');

    const session = require('express-session');

    const fs = require('fs');

    const path = require('path');

    const mockito = require('mockito');

// Start the express function and listen on the server port 5000

    const app = express();

    const port = 5000;

// Start the server

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });

This is the minimal basic code to starup your project with all requirments ready.
