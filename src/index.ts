import express = require('express')
import morgan = require('morgan')
import bodyParser = require('body-parser')
import cookieParser = require('cookie-parser')
import router from './services/router'
import config from './services/config'


const app = express()

// Handle requests for static assets in the public directory.
// e.g. /assets/a.png => /public/a.png
app.use('/assets', express.static(__dirname + '/../public'))

// Render 'ejs' views from 'src/views'
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// Make parsed cookies available in handlers
app.use(cookieParser())

// Basic request logging
app.use(morgan('tiny'))

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Enable CORS on all resources
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/', router)


// Handle uncaught errors (must go after routes)
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  console.error('Caught an error: ' + err.stack)
  res.status(500)
  res.render('500')
})


app.listen(config.PORT, () => {
  console.log(`Ready and listening on port ${config.PORT}`)
})


