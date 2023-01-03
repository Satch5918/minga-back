import express from 'express';
import { format } from 'morgan';
let router = express.Router();
import users from './users.js'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users',users)

export default router;
