
# Overview
In this project we provide the tests for the browse functionality in w3c App.

## 1. fixtures:
Fixtures are used to store test data which can then be used throughout the tests. Usually, the data is stored in [JSON format](https://www.w3schools.com/js/js_json_intro.asp).

## 2. integration:
Test files are located in cypress/integration by default. 

## 3. plugins:
This folder includes index.ts file. This file will be automatically imported every time before the execution of every spec(test) file. Plugins enable you to tap into, modify, or extend the internal behavior of Cypress. You can check out the use cases for plugins from the cypress official docs.

## 4. support:
This folder contains index.ts and reusable methods available to help in the implementation of the scenarios.

Our support folder is a great place to put reusable behavior such as custom commands or global overrides that you want to be applied and available to all your test files.

---

# Setup the environment
To setup the environment after the checkout your have to run in your terminal inside the project folder:

```shell
yarn install
```

# Run scenarios locally
To run the scenarios you have to execute the command bellow in your terminal inside the project folder:

```shell
// Visual interface 
yarn run e2e

// No visual interface 
yarn run test
```

# Run scenarios in our dashboards
To run the scenarios you have to execute the command bellow in your terminal inside the project folder:

```shell
// Cypress dashboard, parallel execution for chrome and firefox 
yarn run firefox-chrome-parallel

// Percy dashboard
export PERCY_TOKEN=bfb5870b79cfb77984797322b7a8f60737f976e401f5a1ac102d4598b1622124
yarn run visual
```

# Run scenarios in docker
Before you run in a docker image, first you have to configure docker locally:
- [Install docker in your local machine](https://docs.docker.com/desktop/install/)
- Download docker image:
```
docker pull cypress/included:9.5.4  
```

To run the scenarios you have to execute the command bellow in your terminal inside the project folder:

```shell
yarn run docker
```

# License
[MIT](https://choosealicense.com/licenses/mit/)

