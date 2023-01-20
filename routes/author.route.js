import controller from "../controllers/author.controllers.js";
import schema from "../schemas/authors.schema.js";
import  validator  from "../middlewares/validator.js";
import express from 'express'
import isAuthor from '../middlewares/isAuthor.js'
import passport from "passport";
import authorEditController from "../controllers/author.edit.controller.js";
let router = express.Router();

const {update} = authorEditController
const {create} = controller;
router.post('/',passport.authenticate('jwt',{session: false}),validator(schema), create)
router.put('/me', passport.authenticate('jwt',{session: false}), validator(schema), isAuthor ,update)


export default router;