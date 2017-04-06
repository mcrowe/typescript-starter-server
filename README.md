# Typescript Starter Server

Basic typescript server starter with express/postgres/mocha.

See `TEMPLATE.md` for template usage instructions.

# Install

Install node modules

> npm install

Create the database

> ./bin/create-db

# Development

Start the server:

> npm start

Start the server in "watch" mode:

> npm run watch

Run tests:

> npm test

# Database

To migrate the database, connect directly to it and execute DDL commands. Add any changes to `db/schema.sql` for other developers.