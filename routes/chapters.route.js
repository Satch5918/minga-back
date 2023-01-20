
import { schema, deleteChapter } from "../schemas/chapter.schema.js"
import express from 'express'
import controller from '../controllers/chapters.controllers.js'
import validator from '../middlewares/validator.js'
import orderExists from '../middlewares/orderExist.js'
import controllerChDetails from '../controllers/chapters.five.controllers.js'
const {get_comic_chapters} = controllerChDetails
import passport from "passport";
import details from '../controllers/chapter.details.controller.js'
import { get } from 'mongoose'
import authorIsActive from '../middlewares/authorIsActive.js'
import isAuthor from '../middlewares/isAuthor.js'
import { verifyAuthor } from "../middlewares/verifyAuthor.js"

let router = express.Router()
const {create, get_pages, update, destroy} = controller

router.post('/', passport.authenticate('jwt',{session: false}), isAuthor, authorIsActive, orderExists, validator(schema), orderExists, create)
router.get('/order',  details.get_comics_order )//params
router.get('/pages/:_id', get_pages)
router.get('/',details.get_comics_chapters)

router.put("/:id",passport.authenticate("jwt", { session: false}), update)
router.delete("/:id", passport.authenticate("jwt", { session: false }),validator(deleteChapter), isAuthor, verifyAuthor , destroy)
/* router.get('/', get_pages) */ //query

export default router; 
