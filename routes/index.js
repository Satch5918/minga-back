import comics from './comics.js'
import categories from './categories.js'
import users from './users.js'
import express from 'express';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/comics', comics)
router.use ('/categories', categories)
router.use('/users', users)

export default router;
