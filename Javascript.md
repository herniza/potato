# Javascript
- Interpreted Language
- Compiled Language
    1. faster and more efficient because we translate all first, after that we can run the app.
    2. not flexible because if there's a change, then we should rebuild the app.
    3. strongly typed. every variable should be declared 
    4. ex: javascript, python

- Static Type : type sudah di declare dari awal
- Dynamic Type : type baru dicek setelah ada value

Importance of javascript in web development

pakai _ untuk menandakan variable ataus method tsb private

## Setup
- init javascript
    ```npm init -y```
- install babel

    ``` npm install @babel/core @babel/node @babel/preset-env --save-dev```
- install jest for testing framework

    ``` npm install -D jest @types/jest```
- run test
    
    ```npm run test```
- run test coverage

    ```npm run test:coverage```
- install eslint
    
    ```npm install eslint eslint-plugin-jest --save-dev```
- ```npx eslint --init```

    How would you like to use ESLint? · style
:heavy_check_mark: What type of modules does your project use? · esm
:heavy_check_mark: Which framework does your project use? · none
:heavy_check_mark: Does your project use TypeScript? · No
:heavy_check_mark: Where does your code run? · node
:heavy_check_mark: How would you like to define a style for your project? · guide
:heavy_check_mark: Which style guide do you want to follow? · airbnb
:heavy_check_mark: What format do you want your config file to be in? · JSON
:heavy_check_mark: Would you like to install them now with npm? ·Yes
)
- cmd + ks -> add shortcut untuk eslint fix problems -> ctrl cmd l
- rules di eslintrc
```
    "comma-dangle": [
      "error",
      "never"
    ],
```


## Create a javascript project
- Generate npm project: ```npm init -y```
- Babel dependencies: ```npm i -D @babel/core @babel/node @babel/preset-env```
- Jest dependencies: ```npm install -D jest @types/jest```
- .babelrc :
    ```
    {
        "presets": [
        "@babel/preset-env"
        ]
    }
    ```

- .gitignore : 
    ```
    node_modules
    coverage
    ```

- scripts package.json :
    ```
    "scripts": {
        "start:dev": "babel-node index.js",
        "test": "jest .",
        "test:coverage": "jest --coverage"
    }
    ```

## Babel
bantu transfile bahasa yg udah kita buat jadi bahasa yg dimengerti browser. (dari es6 ke es5)

## NPM
package manager. kayak maven di java
scripts ada di package.json

## Naming
- class naming : C besar


## Installation
### Webpack
> compile/package -> translate syntax yang ada di index.js untuk bisa dibaca semua browser -> simpan ke main.js di dalem folder dist

```npm i webpack -g```

### Connect to css, fonts, images
```
npm install file-loader -D
npm install css-loader -D
npm install style-loader -D
```