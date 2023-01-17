import controller from '../controllers/comics.controller.js'
const { create } = controller
import express from 'express';
let router = express.Router();

import validator from '../middlewares/validator.js'
import schema from '../schemas/comic.schema.js'
import tittleExist from '../middlewares/tittleExist.js'
import controllerDetails from '../controllers/comics.id.controller.js';
const {get_comic} = controllerDetails



import all from "../controllers/comicall.controller.js"

const { read } = all
let router = express.Router();

router.get('/',read) // modificar nombre metodo 

router.post('/',validator(schema),tittleExist,create);
router.get('/:id', get_comic)

export default router;