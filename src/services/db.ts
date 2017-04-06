import pgp = require('pg-promise')
import Config from './config'


export default pgp()(Config.DATABASE_URL)