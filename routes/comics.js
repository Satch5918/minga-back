import controller from '../controllers/comics.controller.js'
const { create } = controller
import express from 'express';
let router = express.Router();

import validator from '../middlewares/validator.js'
import schema from '../schemas/comic.schema.js'
import tittleExist from '../middlewares/tittleExist.js'
import controllerDetails from '../controllers/comics.id.controller.js';
// aca tendriamos que importar passport 
import passport from 'passport';

// importamos los middlewares de verificacion de author y active
import isAuthor from '../middlewares/isAuthor.js';
import authorIsActive from '../middlewares/authorIsActive.js'


const {get_comic} = controllerDetails



import all from "../controllers/comicall.controller.js"

const { read } = all


router.get('/',read) // modificar nombre metodo 

router.post('/',passport.authenticate('jwt', { session:false } ), isAuthor, authorIsActive, validator(schema),tittleExist,create);
// aca tendriamos que agregar el middleware que se encarga de autenticar el usuario. el metodo es authenticate,  este metodo debe tener dos parameteros el rpimero es el tipo de token en este caso jwt, el segundo parametro es un objeto que tiene una propiedad llamada session y que la vamos a poner en false, esto sirve para checkear que el usuario este activo o no en una session esto lo vamos a controlar a traves de una controlador. luego tenemos que apregar un middleware para verificar que este usuario es un autor, esto se pone tambien aca en la ruta, ademas ponemos un otro middleware para verificar si el usuario esta activo.

router.get('/:id', get_comic)

export default router;