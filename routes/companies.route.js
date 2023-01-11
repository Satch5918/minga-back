import express  from "express";
import controller from "../controllers/companies.controller.js";
import schema from '../schemas/companies.schema.js'
import validator from "../middlewares/validator.js";
const { create, one, read } = controller
let router = express.Router()

router.post('/',validator(schema), create)
router.get('/:id', one)// el nombre del params tiene que ser el mismo en ruta y en controlador 
router.get('/',read)


export default router
