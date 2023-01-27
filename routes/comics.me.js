
import validator from '../middlewares/validator.js'
import { comicSchema } from '../schemas/comic.schema.js'
import express from 'express';
import passport from 'passport';
import controller2 from '../controllers/comicsByAuthorAndCompany.js'




let router = express.Router();




export default router;