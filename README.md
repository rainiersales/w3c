# Overview
In this project we provide the tests for the browse functionality in w3c App.

## fixtures:
Fixtures are used to store test data which can then be used throughout the tests. Usually, the data is stored in [JSON format](https://www.w3schools.com/js/js_json_intro.asp).

## integration:
Test files are located in cypress/integration by default. 

## plugins:
This folder includes index.ts file. This file will be automatically imported every time before the execution of every spec(test) file. Plugins enable you to tap into, modify, or extend the internal behavior of Cypress. You can check out the use cases for plugins from the cypress official docs.

## support:
This folder contains index.ts and reusable methods available to help in the implementation of the scenarios.

Our support folder is a great place to put reusable behavior such as custom commands or global overrides that you want to be applied and available to all your test files.

# Setup the environment
To setup the environment after the checkout your have to run

```shell
yarn install
```

# Run scenarios
To run the scenarios you have to execute the command bellow:

```shell
// Visual interface 
yarn run e2e

// Cypress dashboard in parallel for chrome and firefox 
yarn firefox-chrome-parallel

// Percy dashboard
export PERCY_TOKEN=bfb5870b79cfb77984797322b7a8f60737f976e401f5a1ac102d4598b1622124
yarn visual
```

# License
[MIT](https://choosealicense.com/licenses/mit/)

