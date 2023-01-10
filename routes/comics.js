import controller from '../controllers/comics.controller.js'
const { create } = controller
import express from 'express';
let router = express.Router();
import validator from '../middlewares/validator.js'
import schema from '../schemas/comic.schema.js'
import tittleExist from '../middlewares/tittleExist.js'
import controllerDetails from '../controllers/comics.details.controller.js';
const {get_comic} = controllerDetails



router.post('/',validator(schema),tittleExist,create);
router.get('/:id', get_comic)

export default router;