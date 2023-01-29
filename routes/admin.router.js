import express  from "express";
import passport from "passport";
import adminController from "../controllers/admin.controllers.js";
import validator from '../middlewares/validator.js'


const {updateRoleCompany, updateRoleAuthor } = adminController


let router = express.Router()

router.put('/auth/role/company', updateRoleCompany)
router.put('/auth/role/author', updateRoleAuthor)



export default router