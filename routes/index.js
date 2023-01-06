import comics from './comics.js'

import users from './users.route.js'

import express from 'express';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('minga server ready')
})

router.use('/comics', comics)

router.use('/auth',users)


export default router;
