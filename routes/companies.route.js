import express  from "express";
import controller from "../controllers/companies.controller.js";
import schema from '../schemas/companies.schema.js'
import validator from "../middlewares/validator.js";
import passport from "passport";
import mustSignIn from "../middlewares/mustSignIn.js";
import companyEditController from "../controllers/company.edit.controller.js";

const {update} = companyEditController
const { create, get_company } = controller
let router = express.Router()

router.post('/',passport.authenticate('jwt',{session: false}), mustSignIn,validator(schema), create)
router.get('/:id', get_company)// el nombre del params tiene que ser el mismo en ruta y en controlador 
router.put('/:me',passport.authenticate('jwt',{session: false}), validator(schema), update)
// ruta provicional
export default router
