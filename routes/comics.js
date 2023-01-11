import controller from '../controllers/comics.controller.js'
import controllerCompany from '../controllers/comic.from.company.controller.js'
const {get_comics_from_cia} = controllerCompany


const { create } = controller

import express from 'express';

let router = express.Router();

import validator from '../middlewares/validator.js'

import schema from '../schemas/comic.schema.js'

import tittleExist from '../middlewares/tittleExist.js'

router.post('/',validator(schema),tittleExist,create);
router.get('/comics/profile/company', get_comics_from_cia)

export default router;