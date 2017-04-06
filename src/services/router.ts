import express = require('express')
import Q from '../lib/query'
import safe from '@mcrowe/safe-async-express-errors'
import db from './db'


const router = express.Router()


router.get('/', (_req, res) => {
  res.render('home', {})
})


router.get('/things', safe(async (_req, res) => {
  const things = await db.many( Q.all('things') )
  res.status(200).json({error: null, data: things})
}))


router.get('/things/:id', safe(async (req, res) => {
  const id = req.params.id
  const thing = await db.oneOrNone( Q.find('things', 1) )

  if (thing) {
    res.status(200).json({error: null, data: thing})
  } else {
    res.status(404).json({error: 'Not Found', data: null})
  }
}))


router.get('/syncerror', (_req, _res) => {
  throw new Error('Sync Error')
})


router.get('/asyncerror', safe(async (_req, _res) => {
  const things = await db.many( Q.all('things') )
  throw new Error('Async Error')
}))


export default router