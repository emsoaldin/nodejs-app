# nodejs-app


To run project please follow these steps:
  1. npm install
  2. sequelize-cli db:migrate 
  3. node index.js
Note: you are needed ./config/config.json in root of your folder in order to run sequlize migrations.

## Environment variables

| Variable                       | Description                                         |
| -------------------------------| --------------------------------------------------- |
| NODE_ENV                       | indicates in which environment app is running       |
| DB_DIALECT                     | Database dialect                                    |
| DB_USERNAME                    | Database User                                       |
| DB_PASSWORD                    | Database Password                                   |
| DB_HOST                        | Database Host name                                  |
| DB_NAME                        | Database name                                       |
| DB_POOL_MAX                    | Database pool max                                   |
| DB_POOL_MIN                    | Database pool min                                   |
| DB_POOL_ACQUIRE                | Database pool acquire                               |
| DB_POOL_IDLE                   | Database pool idle                                  |
| AUTH_SECRET                    | We all know what is this for :). Shhhhh             |
  
Happy coding :)
