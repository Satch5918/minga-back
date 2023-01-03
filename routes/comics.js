import controller from '../controllers/comics.controller.js'
const { create } = controller
import express from 'express';
let router = express.Router();





router.post('/',create);

export default router;