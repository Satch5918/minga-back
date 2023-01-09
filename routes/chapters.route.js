import express from 'express'
import controller from '../controllers/chapters.controllers.js'
const {create} = controller
import schema from '../schemas/chapters.schema.js'
import validator from '../middlewares/validator.js'
let router = express.Router()

router.post('/', validator(schema), create)

export default router