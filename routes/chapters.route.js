import express from 'express'
import controller from '../controllers/chapters.controllers.js'
const {create, get_pages} = controller
import schema from '../schemas/chapters.schema.js'
import validator from '../middlewares/validator.js'
import orderExists from '../middlewares/orderExist.js'
import { get } from 'mongoose'
let router = express.Router()

router.post('/', validator(schema), orderExists, create)
router.get('/:comic_id/:order',get_pages)

/* router.get('/:comic_id/:order', get_pages) */ //params
router.get('/', get_pages) //query

export default router; 