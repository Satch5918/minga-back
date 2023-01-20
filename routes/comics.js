import controller from '../controllers/comics.controller.js'
import validator from '../middlewares/validator.js'
import schema from '../schemas/comic.schema.js'
import tittleExist from '../middlewares/tittleExist.js'
import controllerDetails from '../controllers/comics.id.controller.js';
import controllerCompany from '../controllers/comic.from.company.controller.js'
import passport from "passport";
import all from "../controllers/comicall.controller.js"
import isAuthor from '../middlewares/isAuthor.js';
import authorIsActive from '../middlewares/authorIsActive.js';
import express from 'express';

const {get_comics_from_cia} = controllerCompany
const { create, update, destroy } = controller

let router = express.Router();
const {get_comic} = controllerDetails
const { read } = all

router.get('/',read) // modificar nombre metodo 
router.post('/',passport.authenticate('jwt',{session: false}), isAuthor, authorIsActive,validator(schema),tittleExist,create);
router.get('/profile/company', get_comics_from_cia)
router.get('/:id', get_comic)
router.put('/comics/:id',update)
router.delete('/comics/:id',destroy)


export default router;