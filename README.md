# Placeholder

> [!NOTE]
> Welcome to this project!
> Here are some instructions for those intresting in creating a similair project!

## About the project

> This project is made in node.js, and e2e testing in cypress, mockito is also used to mock data in some test cases. I will go throught the steps if you want to create a project like this. First of all, make sure you got node.js installed, and an IDE of your choice, i use vscode. You should have basic knowledge of JavaScript and some HTML. It would help if you tried some smaller projects in Jest too. The prerequirments you need to make a project like this is as follows. Everything inside < > means that you gonna write that in the terminal in specified folder of your project.

### Steps to follow after you got node.js and an IDE.

    1. Run <npm init> in the folder you going to make the project, it will create a package.json file with all your dependencies.
        - <npm i express>
            - <npm i body-parser>
                - <npm i -g nodemon> I would install nodemon globally as it's good to have.
            
    2. For testing the project.
        - <npm i --save-dev cypress> We only need cypress in development.
            - <npm i mockito>
            
    3. If you want to start the project just run any of these commands.
        - <nodemon app.js> if you want to see if evertthing works.
            - <npx cypress open> to run your test cases in cypress, a UI will come up and click.
                - E2E testing, a folder named cypress will be created with a folder e2e, inside that folder you write your test cases.

### Additional information

> Lorem.
