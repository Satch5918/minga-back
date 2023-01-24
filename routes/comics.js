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
import isAuthor from '../middlewares/isAuthor.js'
import controller2 from '../controllers/comicsByAuthorAndCompany.js';
import authorOrCompany from '../middlewares/authorOrCompany.js'
import {verifyAoC} from '../middlewares/verifyAuthorOrCompany.js'

const {get_comics_from_cia} = controllerCompany
const { create,} = controller
const {get_comic} = controllerDetails
const {update, destroy, myComics } = controller2

let router = express.Router();

 const { read } = all

router.get('/',read) 
router.get('/me', passport.authenticate('jwt',{session: false}), myComics)
router.get('/profile/company', get_comics_from_cia)
router.get('/:id', get_comic)
router.post('/',passport.authenticate('jwt',{session: false}), isAuthor, authorIsActive,validator(schema),tittleExist,create);
router.put('/:id',passport.authenticate('jwt',{session: false}),validator(comicSchema),authorOrCompany,update)
router.delete('/:id',passport.authenticate('jwt',{session: false}),validator(comicSchema),authorOrCompany,verifyAoC,destroy)


export default router;