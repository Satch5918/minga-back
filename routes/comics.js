import controller from '../controllers/comics.controller.js'
const { create } = controller
import express from 'express';
let router = express.Router();
import validator from '../middlewares/validator.js'
import schema from '../schemas/comic.schema.js'





router.post('/',validator(schema),create);

export default router;