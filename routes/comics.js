import controller from '../controllers/comics.controller.js'
import validator from '../middlewares/validator.js'
import {schema, comicSchema } from '../schemas/comic.schema.js'
import tittleExist from '../middlewares/tittleExist.js'
import controllerDetails from '../controllers/comics.id.controller.js';
import controllerCompany from '../controllers/comic.from.company.controller.js'
import passport from "passport";
import all from "../controllers/comicall.controller.js"
import authorIsActive from '../middlewares/authorIsActive.js';
import express from 'express';
import authorOrCompany from '../middlewares/authorOrCompany.js'
import isAuthor from '../middlewares/isAuthor.js'
import {verifyAoC} from '../middlewares/verifyAuthorOrCompany.js'

const {get_comics_from_cia} = controllerCompany
const { create, update, destroy, read } = controller
const {get_comic} = controllerDetails

let router = express.Router();

/* const { read } = all

router.get('/',read) */
router.post('/',passport.authenticate('jwt',{session: false}), isAuthor, authorIsActive,validator(schema),tittleExist,create);
router.get('/profile/company', get_comics_from_cia)
router.get('/:id', get_comic)
router.put('/:id',passport.authenticate('jwt',{session: false}),validator(comicSchema),authorOrCompany,update)
router.delete('/:id',passport.authenticate('jwt',{session: false}),validator(comicSchema),authorOrCompany,verifyAoC,destroy)
router.get('/me', read)
export default router;