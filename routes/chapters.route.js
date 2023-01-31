
import { schema, deleteChapter,updateChapter } from "../schemas/chapters.schema.js"
import express from 'express'
import controller from '../controllers/chapters.controllers.js'
import schema from '../schemas/chapters.schema.js'
import validator from '../middlewares/validator.js'
import orderExists from '../middlewares/orderExist.js'
import controllerChDetails from '../controllers/chapters.five.controllers.js'
const {get_comic_chapters} = controllerChDetails

import validator from '../middlewares/validator.js'
import orderExists from '../middlewares/orderExist.js'
import passport from "passport";
import details from '../controllers/chapter.details.controller.js'
import { get } from 'mongoose'
import authorIsActive from '../middlewares/authorIsActive.js'
import isAuthor from '../middlewares/isAuthor.js'
import {verifyAuthor} from "../middlewares/verifyAuthor.js"


router.post('/', passport.authenticate('jwt',{session: false}), isAuthor, authorIsActive, validator(schema), orderExists, create)
router.get('/order',  details.get_comics_order )//params
router.get('/pages/:_id', get_pages)
router.get('/',details.get_comics_chapters)



let router = express.Router()
const {create, get_pages, update, destroy} = controller
router.put("/:id",passport.authenticate("jwt", { session: false}),validator(updateChapter),isAuthor, update)
router.delete("/:id", passport.authenticate("jwt", { session: false }), isAuthor,verifyAuthor, destroy)
/* router.get('/', get_pages) */ //querys

export default router; 
