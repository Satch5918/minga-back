import comics from './comics.js'
import categories from './categories.js'

import express from 'express';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('minga server ready')
})

router.use('/api/comics', comics)
router.use ('/categories', categories)


export default router;
