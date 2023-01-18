import express from 'express';
let router = express.Router();
import schema from '../schemas/comment.schema.js'
import validator from '../middlewares/validator.js'
import controller from '../controllers/coments.controller.js'
const { create } = controller


/* GET users listing. */
router.post('/',passport.authenticate('jwt',{session: false}),validator(schema),create)

export default router;
