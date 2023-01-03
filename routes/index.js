import users from './users.route.js'
import companies from './companies.route.js'
import express from 'express'
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('minga server ready')
})

router.use('/auth',users)
router.use('/companies', companies)

export default router