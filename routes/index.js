import chapters from './chapters.route.js'
import users from './users.route.js'
import express from 'express'
import orderExists from '../middlewares/orderExist.js'
let router = express.Router()
import comments from './comments.route.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('minga server ready')
})

router.use('/auth',users)
router.use('/comments',comments)

export default router
