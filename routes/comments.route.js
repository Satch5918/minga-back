import express from 'express';
let router = express.Router();
import schema from '../schemas/comment.schema.js'
import validator from '../middlewares/validator.js'
import controller from '../controllers/coments.controller.js'
const { create } = controller
import passport from "passport";
import mustSignIn from '../middlewares/mustSignIn.js'

/* GET users listing. */
router.post('/',passport.authenticate('jwt',{session: false}), mustSignIn,validator(schema),create)

export default router;
