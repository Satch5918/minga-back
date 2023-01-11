import express from 'express'
import controller from '../controllers/chapters.controllers.js'
const {create} = controller
import schema from '../schemas/chapters.schema.js'
import validator from '../middlewares/validator.js'
import orderExists from '../middlewares/orderExist.js'
import controllerChDetails from '../controllers/chapters.five.controllers.js'
const {get_comic_chapters} = controllerChDetails

let router = express.Router()

router.post('/', validator(schema), orderExists, create)
router.get('/', get_comic_chapters)
export default router