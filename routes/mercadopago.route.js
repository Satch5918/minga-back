import express  from "express";
const router = express.Router()
import passport from "passport";
import validator from '../middlewares/validator.js'
import crearOrden from "../controllers/mercadopago.controller.js";


router.post('/', crearOrden)

export default router