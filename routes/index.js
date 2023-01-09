import chapters from './chapters.route.js'
import comics from './comics.js'
import users from './users.route.js'
import express from 'express';
import comments from './comments.route.js'
import author from './author.route.js'

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

router.use('/auth',users)


export default router;
