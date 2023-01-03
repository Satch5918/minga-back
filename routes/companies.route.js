import express  from "express";
import controller from "../controllers/companies.controller.js";
const { create } = controller
let router = express.Router()

router.post('/', create)


export default router
