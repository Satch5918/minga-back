import express from 'express';
let router = express.Router();
import controller from '../controllers/coments.controller.js'
const { create } = controller

/* GET users listing. */
router.post('/', create)

export default router;
