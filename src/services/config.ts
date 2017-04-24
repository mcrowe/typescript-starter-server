interface Config {
  PORT: number,
  DATABASE_URL: string
}


const config: Config = {
  PORT: parseInt(process.env.PORT),
  DATABASE_URL: process.env.DATABASE_URL
}


export default config