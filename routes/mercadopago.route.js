import express  from "express";
const router = express.Router()
import passport from "passport";
import validator from '../middlewares/validator.js'
import paymentController from "../controllers/mercadopago.controller.js";


const {create} = paymentController

router.post('/', create)

export default router