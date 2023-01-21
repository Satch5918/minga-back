import authorOrCompany from '../middlewares/authorOrCompany.js'
import {verifyAoC} from '../middlewares/verifyAuthorOrCompany.js'
import validator from '../middlewares/validator.js'
import { comicSchema } from '../schemas/comic.schema.js'
import express from 'express';
import controllers from '../controllers/comicsByAuthorAndCompany.js'


const { update, destroy,  read  } = controllers

let router = express.Router();

router.put('/:id',passport.authenticate('jwt',{session: false}),validator(comicSchema),authorOrCompany,update)

router.delete('/:id',passport.authenticate('jwt',{session: false}),validator(comicSchema),authorOrCompany,verifyAoC,destroy)

router.get('/me', read)

export default router;