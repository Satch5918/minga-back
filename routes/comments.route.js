import express from 'express';
let router = express.Router();
import schema from '../schemas/comment.schema.js'
import validator from '../middlewares/validator.js'
import controller from '../controllers/coments.controller.js'
const { create, update_comment , delete_comment, read} = controller

import passport from "passport";
import mustSignIn from '../middlewares/mustSignIn.js'
import is_AuthorOfComment from '../middlewares/isAuthorOfComment.js';

/* GET users listing. */
 router.post('/', passport.authenticate('jwt',{session: false}), mustSignIn,validator(schema),create)
router.put('/:id',passport.authenticate('jwt', {session: false}), validator(schema), is_AuthorOfComment, update_comment)
router.delete('/:id',passport.authenticate('jwt', {session: false}), is_AuthorOfComment, delete_comment)
router.get('/', read)
export default router;
