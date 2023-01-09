import express from 'express';

import chapters from './chapters.route.js'
import comics from './comics.js'
import users from './users.route.js'
import comments from './comments.route.js'
import author from './author.route.js'
import companies from './companies.route.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('minga server ready')
})

router.use('/auth',users)
router.use('/comments',comments)
router.use('/authors',author)
router.use('/chapters', chapters)
router.use('/comics', comics)
router.use('/companies', companies)

router.use('/auth',users)


export default router;
