import chapters from './chapters.route.js'
import users from './users.route.js'
import express from 'express'
import orderExists from '../middlewares/orderExist.js'
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('minga server ready')
})

router.use('/chapters', orderExists, chapters)
router.use('/auth', users)

export default router