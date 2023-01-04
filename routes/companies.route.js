import express  from "express";
import controller from "../controllers/companies.controller.js";
import schema from '../schemas/companies.schema.js'
import validator from "../middlewares/validator.js";
const { create } = controller
let router = express.Router()

router.post('/',validator(schema), create)


export default router
