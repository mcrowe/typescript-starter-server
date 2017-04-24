#!/usr/bin/env bash

createdb typescript-starter-server
psql -d typescript-starter-server < ./db/schema.sql