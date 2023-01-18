import controller from '../controllers/comics.controller.js'
import validator from '../middlewares/validator.js'
import schema from '../schemas/comic.schema.js'
import tittleExist from '../middlewares/tittleExist.js'
import controllerDetails from '../controllers/comics.id.controller.js';
import controllerCompany from '../controllers/comic.from.company.controller.js'

const {get_comics_from_cia} = controllerCompany


const { create } = controller
import express from 'express';
let router = express.Router();


const {get_comic} = controllerDetails



import all from "../controllers/comicall.controller.js"

const { read } = all


router.get('/',read) // modificar nombre metodo 
router.post('/',passport.authenticate('jwt',{session: false}),validator(schema),tittleExist,create);
router.get('/profile/company', get_comics_from_cia)
router.get('/:id', get_comic)


export default router;