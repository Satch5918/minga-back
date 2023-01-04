import  author  from './authorroutes.js'
import express from 'express'
import users from './users.route.js'
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('minga server ready')
})

router.use('/auth',users)
router.use('/author',author)


export default router