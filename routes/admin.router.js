import express  from "express";
import passport from "passport";
import adminController from "../controllers/admin.controllers.js";
import validator from '../middlewares/validator.js'
import isAdmin from '../middlewares/isAdmin.js'


const {updateRoleCompany, updateRoleAuthor } = adminController


let router = express.Router()

router.put('/company',passport.authenticate('jwt',{session: false}), updateRoleCompany)
router.put('/auth/role/author', updateRoleAuthor)



export default router