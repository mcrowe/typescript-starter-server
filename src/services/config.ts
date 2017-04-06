import dotenv = require('dotenv')
dotenv.config()


interface Config {
  PORT: number,
  DATABASE_URL: string
}


const config: Config = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL
}


export default config