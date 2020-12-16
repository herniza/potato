# React JS

## Starter Guide
---
1. create app
    
    ```npx create-react-app project-name --use-npm```
2. ```cd react-contact-list```
3. ```npm start```
4. change app.js to class. extends React.Component
5. ```npm install --save-dev eslint-plugin-jest eslint-plugin-testing-library```
6. ```npx eslint --init```

    ? How would you like to use ESLint? To check syntax, find problems, and enforce code style

    ? What type of modules does your project use? JavaScript modules (import/export)

    ? Which framework does your project use? React

    ? Does your project use TypeScript? No

    ? Where does your code run? Browser

    ? How would you like to define a style for your project? Use a popular style guide

    ? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript

    ? What format do you want your config file to be in? JSON
    ? Would you like to install them now with npm? Yes
7. Add to .eslintrc :

        "rules": {
            "comma-dangle": ["error", "never"],
            "no-underscore-dangle": "off",
            "class-methods-use-this": "off"

        },
        "parser": "babel-eslint",
        "plugins": [
            "react",
            "jest",
            "testing-library"
        ],
        "env": {
            "browser": true,
            "es2021": true,
            "jest/globals": true
        }
8. Add to package.json

        "jest": {
            "coveragePathIgnorePatterns": [
                "reportWebVitals.js",
                "setupTests.js",
                "<rootDir>/src/index.jsx"
            ]
        }
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject",
            "lint": "eslint --ext .jsx,.js .",
            "test:coverage": "npm run test -- --coverage --watchAll false"
        },
9. Change app.js, app.test.js, index.js to .jsx
10. Create .eslintignore

        reportWebVitals.js
        setupTests.js

## Component
---
1. Control Component
    > The controlled component is a way that you can handle the form input value using the state and to change the input value there is only one way to change it is using setState or useState
2. Uncontrol Component
    > The uncontrolled component is like traditional HTML form inputs that you will not be able to handle the value by yourself but the DOM will take care of handling the value of the inpu
3. Functional Component
    > is a function that accepts a single “props” object argument with data and returns a React element.