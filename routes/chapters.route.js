import express from 'express'
import controller from '../controllers/chapters.controllers.js'
const {create} = controller
let router = express.Router()

router.post('/', create)

export default router