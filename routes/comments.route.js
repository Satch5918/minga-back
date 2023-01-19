import express from 'express';
let router = express.Router();
import schema from '../schemas/comment.schema.js'
import validator from '../middlewares/validator.js'
import controller from '../controllers/coments.controller.js'
const { create, update_comment , delete_comment} = controller

import passport from "passport";
import mustSignIn from '../middlewares/mustSignIn.js'

/* GET users listing. */
router.post('/',passport.authenticate('jwt',{session: false}), mustSignIn,validator(schema),create)
router.put('/:id', validator(schema), update_comment)
router.delete('/:id', delete_comment)
export default router;
