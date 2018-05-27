# API User #

### What is this? ###

* User service API for web & mobile apps

### How do I get set up? ###

* Install Node.js v8.6.0

* Install npm v5.3.0
    
* Install project dependencies:
    
    - Install all dependencies defined in package.json:
    
        `npm install`
    
* Setup environment variables

    This project uses [dotenv](https://www.npmjs.com/package/dotenv), please configure the proper environment variables before running this application.
    
    - Copy the `.sample-env` file and rename it to `.env`
    - Edit all sample fields with the correct environment variables for the application server
    
* Database migration (using [Sequelize](http://docs.sequelizejs.com)):

    - create model (and migration): `node node_modules/.bin/sequelize model:create --name <model_name> --attributes <attributes>`
    - create migration: `node node_modules/.bin/sequelize migration:create`
    - run: `node node_modules/.bin/sequelize db:migrate`
    - undo: `node node_modules/.bin/sequelize db:migrate:undo`
    - help: `node node_modules/.bin/sequelize help`

* How to run tests:

    `npm test`

* Deployment instructions

    `npm start` or `node index.js`    

### Contribution guidelines ###

* Writing tests:

    This project use [Mocha](http://mochajs.org/) as the testing environment, and [Chai](http://chaijs.com/) as the assertion library.
    This project also provide code coverage using [Istanbul](https://www.npmjs.com/package/istanbul).
    Code coverage report can be viewed in `coverage/lcov-report/index.html` after running test.
    All test files should be located under the `tests` directory.

* Writing code:

    Please fork this repository first for starting a contribution. This project use ESLint as Javascript lint library.
    
    - To run ESlint, type `node node_modules/.bin/eslint .`
    - Fixing code errors, just type `node node_modules/.bin/eslint . --fix`

*endpoint
    
    Method : GET
    Desc : get all user
    http://localhost:8000/user
    
    Method : GET
    DESC : get user by id 
    http://localhost:8000/user/:id
    
    Method : POST 
    DESC : create new user 
    http://localhost:8000/user
    Content-type : application/json
    body :
    `{
     "email" 	: "someemail@email.com",
     "username" : "someUsername",
     "password" : "somePassword"
    }`
    
    Method : PUT
    DESC : update user
    http://localhost:8000/user/:id
    Content-type : application/json
    body :
    `{
     "email" 	: "someemaieditedl@email.com",
     "username" : "someUsernameEdited",
     "password" : "somePasswordEdited"
    }`
    
    Method : DELETE
    DESC : delete user by id 
    http://localhost:8000/user/:id
    
    Method : GET 
    DESC : get all data 
    http://localhost:8000/todo?username=someUsernamef&password=somePassword&priority=(DESC || ASC)
    
    Method : GET 
    DESC : get one data 
    http://localhost:8000/todo/:id?username=someUsernamef&password=somePassword
    
    Method : POST
    DESC : add data
    Content-type : application/json
    http://localhost:8000/todo?username=someUsernamef&password=somePassword
    body :
    `{
     "name" : "string",
     "priority" : "number",
     "location" : "string",
     "time_start" : "datetime"
    }`
    
    Method : PUT
    DESC : update data
    Content-type : application/json
    http://localhost:8000/todo/:id?username=someUsernamef&password=somePassword
    body :
     `{
     "name" : "string",
     "priority" : "number",
     "location" : "string",
     "time_start" : "datetime"
    }`
    
    Method : DELETE
    DESC : update data
    Content-type : application/json
    http://localhost:8000/todo/:id?username=someUsernamef&password=somePassword
    

### Special Thanks? ###

&copy; [Rakhmatullah Yoga Sutrisna](https://source.gits.id/rakhmatullahyoga) - [PT GITS Indonesia](https://gits.co.id) 2017
