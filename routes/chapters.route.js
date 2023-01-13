import express from 'express'
import controller from '../controllers/chapters.controllers.js'
import schema from '../schemas/chapters.schema.js'
import validator from '../middlewares/validator.js'
import orderExists from '../middlewares/orderExist.js'
import details from '../controllers/chapter.details.controller.js'
import { get } from 'mongoose'

let router = express.Router()
const {create, get_pages} = controller

router.post('/', validator(schema), orderExists, create)
router.get('/order', details.get_comics_order )//params
router.get('/pages/:_id', get_pages)
/* router.get('/', get_pages) */ //query

export default router; 