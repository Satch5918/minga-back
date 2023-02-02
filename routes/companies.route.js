import express  from "express";
import controller from "../controllers/companies.controller.js";
import schemas from '../schemas/companies.schema.js'
import validator from "../middlewares/validator.js";
import passport from "passport";
import mustSignIn from "../middlewares/mustSignIn.js";
import companyEditController from "../controllers/company.edit.controller.js";
import isCompany from "../middlewares/isCompany.js";
import adminController from "../controllers/admin.controllers.js";

const {schemaPost, schemaPut} = schemas
const {update} = companyEditController
const { create, get_company } = controller
let router = express.Router()
const {getCompanies} = adminController

router.get('/',passport.authenticate('jwt',{session: false}),getCompanies)
router.post('/',passport.authenticate('jwt',{session: false}), mustSignIn ,validator(schemaPost), create)
router.get('/:id', get_company)// el nombre del params tiene que ser el mismo en ruta y en controlador 
router.put('/:me',passport.authenticate('jwt',{session: false}), validator(schemaPut), isCompany,update)
// ruta provicional

export default router
