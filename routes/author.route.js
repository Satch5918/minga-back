import controller from "../controllers/author.controllers.js";
import { schemaPut, schemaPost } from "../schemas/authors.schema.js";
import  validator  from "../middlewares/validator.js";
import express from 'express'
import isAuthor from '../middlewares/isAuthor.js'
import passport from "passport";
import authorEditController from "../controllers/author.edit.controller.js";
import authorIsActive from "../middlewares/authorIsActive.js";
import adminController from "../controllers/admin.controllers.js";



let router = express.Router();

const { getAuthor } = adminController
const {update} = authorEditController
const {create} = controller;

router.post('/',passport.authenticate('jwt',{session: false}),validator(schemaPost), create)
router.put('/me', passport.authenticate('jwt',{session: false}), validator(schemaPut), isAuthor,update)
router.get('/',passport.authenticate('jwt',{session: false}),getAuthor )

export default router;