# React Native

## Setup
1. Create Project

    `npx react-native init exercise12`
2. Run Metro

    `npx react-native start`
3. Run Android

    `npx react-native run-android`
4. Run iOS

    `npx react-native run-ios`

### Custom Setup
1. delete yarn lock/package-lock and do npm install
2. Create src folder, move App.js and __Tests/App-test.js to src, naming to App.test.js. Rename App and App.test to use .jsx
3. install package:

    `npm install --save-dev @testing-library/react-native`

    `npm install --save-dev @testing-library/jest-native`

    `npm install eslint-plugin-testing-library@latest --save-dev`
4. Delete the yarn.lock and do npm install
5. Add package.json:

        "jest": {
            "preset": "react-native",
            "setupFilesAfterEnv": [
            "@testing-library/jest-native/extend-expect"
            ],
            "transform": {
            "^.+\\.[jt]sx?$": "babel-jest"
            },
            "moduleFileExtensions": [
            "js",
            "jsx"
            ]
        },
        "transform": {
            "^.+\\.[jt]sx?$": "babel-jest"
        },
        "moduleFileExtensions": [
            "js",
            "jsx"
        ]
6. Add to eslintrc.js

        module.exports = {
        root: true,
        extends: ['@react-native-community', 'plugin:testing-library/recommended'],
        plugins: ['testing-library'],
        rules: {
            'comma-dangle': ['error', 'never'],
            'testing-library/no-debug': 'warn',
            'testing-library/no-manual-cleanup': 'warn',
            'testing-library/prefer-explicit-assert': 'error',
            'react/prop-types': 'error'
        },
        parser: 'babel-eslint',
        parserOptions: {
            ecmaFeatures: {
            jsx: true
            },
            ecmaVersion: 6,
            sourceType: 'module'
        },
        env: {
            'jest/globals': true
        }
        };
7. Add to .prettierrc.js

        module.exports = {
            bracketSpacing: true,
            jsxBracketSameLine: true,
            singleQuote: true,
            trailingComma: 'none'
        };
8. Add to metro.config.js

        module.exports = {
        transformer: {
            getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false
            }
            })
        },
        resolver: {
            sourceExts: ['js', 'jsx', 'ts', 'tsx']
        }
        };
9. add to package.json under setupFilesAfterEnv on jest
    "transform": {
      "^.+\\.[jt]sx?$": "babel-jest"
    },
    "moduleFileExtensions": [
      "js",
      "jsx"
    ]
10. Fix all the lint error before add and commit the files