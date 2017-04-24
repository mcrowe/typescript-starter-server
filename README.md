# Typescript Starter Server

Basic typescript server starter with express/postgres/mocha.

See `TEMPLATE.md` for template usage instructions.

## Setup

Install node modules:

> npm install

Create the database:

> ./bin/create-db.sh

Create and configure a `.env` file:

> cp .env.example .env

## Usage

Start the server in "watch" mode:

> npm run watch

Run tests:

> npm test

## Database

To migrate the database, connect directly to it and execute DDL commands. Add any changes to `db/schema.sql` for other developers.