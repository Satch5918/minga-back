import express from 'express'
import controller from '../controllers/chapters.controllers.js'
const {create, get_comic_chapters} = controller
import schema from '../schemas/chapters.schema.js'
import validator from '../middlewares/validator.js'
import orderExists from '../middlewares/orderExist.js'
let router = express.Router()

router.post('/', validator(schema), orderExists, create)
router.get('/', get_comic_chapters)
export default router